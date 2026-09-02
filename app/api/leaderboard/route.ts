import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { validatePlayerName, sanitizeText } from '@/lib/profanityFilter';

// Fallback mock leaderboard if Supabase is offline or not yet migrated
const FALLBACK_LEADERBOARD = [
  { name: 'Lucas Dev', score: 480 },
  { name: 'Mariana Silva', score: 360 },
  { name: 'Rafael Costa', score: 270 },
  { name: 'Ana Beatriz', score: 190 },
  { name: 'Carlos Eduardo', score: 120 },
];

// Maximum achievable score in game mechanics (anti-cheat threshold)
const MAX_ALLOWED_SCORE = 3500;

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('visitors')
      .select('name, score')
      .order('score', { ascending: false })
      .limit(20);

    if (error || !data || data.length === 0) {
      return NextResponse.json({ leaderboard: FALLBACK_LEADERBOARD });
    }

    // Sanitize database output (filter out any previously injected XSS or cheated 99999 scores)
    const sanitizedData = data
      .map((item) => ({
        name: sanitizeText(item.name || 'Visitante'),
        score: Math.min(Math.max(0, parseInt(item.score, 10) || 0), MAX_ALLOWED_SCORE),
      }))
      .filter((item) => item.name.length >= 2 && item.score <= MAX_ALLOWED_SCORE)
      .slice(0, 10);

    return NextResponse.json({
      leaderboard: sanitizedData.length > 0 ? sanitizedData : FALLBACK_LEADERBOARD,
    });
  } catch (err) {
    return NextResponse.json({ leaderboard: FALLBACK_LEADERBOARD });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, score = 0 } = body;

    const validation = validatePlayerName(name || '');
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const rawScore = parseInt(score, 10);
    if (isNaN(rawScore) || rawScore < 0) {
      return NextResponse.json({ error: 'Pontuação inválida.' }, { status: 400 });
    }

    // Reject obvious score injections (> 3500)
    if (rawScore > MAX_ALLOWED_SCORE) {
      return NextResponse.json(
        { error: `Pontuação excede o limite máximo permitido (${MAX_ALLOWED_SCORE} EXP).` },
        { status: 400 }
      );
    }

    const cleanName = validation.cleanName;
    const cleanScore = Math.min(rawScore, MAX_ALLOWED_SCORE);

    // Upsert into Supabase visitors table
    const { error: upsertError } = await supabase
      .from('visitors')
      .upsert(
        {
          name: cleanName,
          score: cleanScore,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'name' }
      );

    if (upsertError) {
      console.error('Supabase upsert error:', upsertError);
    }

    // Fetch updated top leaderboard and sanitize
    const { data: updatedData } = await supabase
      .from('visitors')
      .select('name, score')
      .order('score', { ascending: false })
      .limit(20);

    const sanitizedData = updatedData
      ? updatedData
          .map((item) => ({
            name: sanitizeText(item.name || 'Visitante'),
            score: Math.min(Math.max(0, parseInt(item.score, 10) || 0), MAX_ALLOWED_SCORE),
          }))
          .filter((item) => item.name.length >= 2 && item.score <= MAX_ALLOWED_SCORE)
          .slice(0, 10)
      : FALLBACK_LEADERBOARD;

    return NextResponse.json({
      success: true,
      leaderboard: sanitizedData && sanitizedData.length > 0 ? sanitizedData : FALLBACK_LEADERBOARD,
    });
  } catch (err) {
    console.error('Leaderboard POST error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

