import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { validatePlayerName } from '@/lib/profanityFilter';

// Fallback mock leaderboard if Supabase is offline or not yet migrated
const FALLBACK_LEADERBOARD = [
  { name: 'Lucas Dev', score: 480 },
  { name: 'Mariana Silva', score: 360 },
  { name: 'Rafael Costa', score: 270 },
  { name: 'Ana Beatriz', score: 190 },
  { name: 'Carlos Eduardo', score: 120 },
];

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('visitors')
      .select('name, score')
      .order('score', { ascending: false })
      .limit(10);

    if (error || !data || data.length === 0) {
      return NextResponse.json({ leaderboard: FALLBACK_LEADERBOARD });
    }

    return NextResponse.json({ leaderboard: data });
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

    const cleanName = validation.cleanName;
    const cleanScore = Math.max(0, parseInt(score, 10) || 0);

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

    // Fetch updated top leaderboard
    const { data: updatedData } = await supabase
      .from('visitors')
      .select('name, score')
      .order('score', { ascending: false })
      .limit(10);

    return NextResponse.json({
      success: true,
      leaderboard: updatedData && updatedData.length > 0 ? updatedData : FALLBACK_LEADERBOARD,
    });
  } catch (err) {
    console.error('Leaderboard POST error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
