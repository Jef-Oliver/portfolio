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

    // Sanitize database output and filter names against profanity/troll list
    const sanitizedData = data
      .map((item) => ({
        name: sanitizeText(item.name || 'Visitante'),
        score: Math.max(0, parseInt(item.score, 10) || 0),
      }))
      .filter((item) => validatePlayerName(item.name).valid)
      .slice(0, 10);

    return NextResponse.json({
      leaderboard: sanitizedData.length > 0 ? sanitizedData : FALLBACK_LEADERBOARD,
    });
  } catch (err) {
    return NextResponse.json({ leaderboard: FALLBACK_LEADERBOARD });
  }
}

import { verifyGameSessionToken, validateScorePlausibility } from '@/lib/gameSecurity';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, score = 0, sessionToken } = body;

    // 1. Mandatory Session Token Verification (anti-curl / anti-postman)
    // The player MUST have been initialized via the site's onboarding modal
    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Acesso negado: Sessão não autorizada ou chamada fora da aplicação.' },
        { status: 403 }
      );
    }

    const tokenVerification = verifyGameSessionToken(sessionToken);
    if (!tokenVerification.valid || !tokenVerification.payload) {
      return NextResponse.json(
        { error: `Falha na verificação de integridade: ${tokenVerification.error || 'Token inválido'}.` },
        { status: 403 }
      );
    }

    // 2. Cross-check name in payload with name in token to prevent spoofing
    if (tokenVerification.payload.name.toLowerCase() !== (name || '').trim().toLowerCase()) {
      return NextResponse.json(
        { error: 'Tentativa de falsificação de identidade detectada.' },
        { status: 403 }
      );
    }

    // 3. Mathematical plausibility check (anti-cheat speed/value)
    const sessionDurationSeconds = (Date.now() - tokenVerification.payload.sessionStartedAt) / 1000;
    const rawScore = parseInt(score, 10);
    const plausibility = validateScorePlausibility(rawScore, sessionDurationSeconds);

    if (!plausibility.plausible) {
      return NextResponse.json(
        { error: `Detecção anti-cheat: ${plausibility.reason}` },
        { status: 400 }
      );
    }

    const validation = validatePlayerName(name || '');
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const cleanName = validation.cleanName;
    const cleanScore = Math.max(0, rawScore);

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
            score: Math.max(0, parseInt(item.score, 10) || 0),
          }))
          .filter((item) => validatePlayerName(item.name).valid)
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

// Admin-only DELETE: remove a cheated/invalid player by name
// Usage: DELETE /api/leaderboard with body { name: "PlayerName" }
// Requires Authorization: Bearer <ADMIN_SECRET> header
export async function DELETE(req: Request) {
  try {
    const adminSecret = process.env.ADMIN_SECRET || 'jef-admin-secret-2025';
    const authHeader = req.headers.get('authorization') || '';
    if (authHeader !== `Bearer ${adminSecret}`) {
      return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
    }

    const body = await req.json();
    const { name } = body;
    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Nome inválido.' }, { status: 400 });
    }

    const { error } = await supabase.from('visitors').delete().eq('name', name);
    if (error) {
      console.error('Supabase delete error:', error);
      return NextResponse.json({ error: 'Erro ao deletar.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: `"${name}" removido do ranking.` });
  } catch (err) {
    console.error('Leaderboard DELETE error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
