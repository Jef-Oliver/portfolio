import { NextResponse } from 'next/server';
import { generateGameSessionToken } from '@/lib/gameSecurity';
import { validatePlayerName } from '@/lib/profanityFilter';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, isGuest = false } = body;

    let finalName = '';
    if (isGuest || !name) {
      // Automatic visitor generation: "Visitante #XYZ"
      finalName = `Visitante #${Math.floor(100 + Math.random() * 900)}`;
    } else {
      const validation = validatePlayerName(name);
      if (!validation.valid) {
        return NextResponse.json({ error: validation.error }, { status: 400 });
      }
      finalName = validation.cleanName;
    }

    // Capture requester IP for anti-replay binding
    const forwardedFor = req.headers.get('x-forwarded-for') || '';
    const ip = forwardedFor.split(',')[0].trim() || req.headers.get('x-real-ip') || '';

    // Generate cryptographic token confirming registration from onboarding
    const token = generateGameSessionToken(finalName, true, ip);

    return NextResponse.json({
      success: true,
      name: finalName,
      sessionToken: token,
    });
  } catch (err) {
    console.error('Session init error:', err);
    return NextResponse.json({ error: 'Erro ao inicializar sessão de jogador.' }, { status: 500 });
  }
}
