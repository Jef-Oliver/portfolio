import crypto from 'crypto';

const SECRET_KEY = process.env.GAME_SECURITY_SECRET || 'jef-security-vault-key-2025-x91';

export interface GameSessionPayload {
  name: string;
  sessionStartedAt: number;
  ipHash?: string;
  isRegisteredFromModal: boolean;
}

/**
 * Generates an HMAC SHA-256 integrity token for a player session.
 * This token proves that the player was created through the legitimate
 * onboarding preloader modal on the website, not via curl or Postman.
 */
export function generateGameSessionToken(name: string, isRegisteredFromModal = true, ip = ''): string {
  const payload: GameSessionPayload = {
    name,
    sessionStartedAt: Date.now(),
    ipHash: ip ? crypto.createHash('sha256').update(ip).digest('hex').substring(0, 16) : undefined,
    isRegisteredFromModal,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(payloadB64)
    .digest('base64url');

  return `${payloadB64}.${signature}`;
}

/**
 * Validates a session token provided by the client when submitting scores.
 */
export function verifyGameSessionToken(token: string): { valid: boolean; payload?: GameSessionPayload; error?: string } {
  if (!token || !token.includes('.')) {
    return { valid: false, error: 'Token de integridade ausente ou malformado.' };
  }

  const [payloadB64, signature] = token.split('.');
  const expectedSignature = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(payloadB64)
    .digest('base64url');

  // Constant-time comparison to prevent timing attacks
  const sigBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (sigBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(sigBuffer, expectedBuffer)) {
    return { valid: false, error: 'Assinatura criptográfica inválida (tentativa de adulteração).' };
  }

  try {
    const payload: GameSessionPayload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));

    // Check token age (max 48 hours for a session)
    const MAX_SESSION_AGE = 48 * 60 * 60 * 1000;
    if (Date.now() - payload.sessionStartedAt > MAX_SESSION_AGE) {
      return { valid: false, error: 'Sessão expirada. Inicie uma nova sessão.' };
    }

    return { valid: true, payload };
  } catch {
    return { valid: false, error: 'Falha ao decodificar payload de segurança.' };
  }
}

/**
 * Validates whether the reported score is mathematically plausible.
 * The game has capped enemies per wave and maximum EXP rewards per wave.
 * Even playing perfectly up to wave 99, a score cannot grow faster than:
 * - Minimum play duration (at least 250ms per monster hit)
 * - Maximum score rate per minute
 */
export function validateScorePlausibility(
  currentScore: number,
  sessionDurationSeconds: number
): { plausible: boolean; reason?: string } {
  // Max score in game universe is 3500
  if (currentScore > 3500) {
    return { plausible: false, reason: 'Pontuação acima do limite máximo físico do jogo (3500).' };
  }

  if (currentScore < 0) {
    return { plausible: false, reason: 'Pontuação negativa não permitida.' };
  }

  // If score > 100 but session just started under 3 seconds ago -> impossible
  if (currentScore > 100 && sessionDurationSeconds < 3) {
    return { plausible: false, reason: 'Taxa de cliques e ganho de EXP humanamente impossível.' };
  }

  // Maximum feasible EXP gain rate is ~450 EXP per minute
  const maxPossibleExp = Math.max(150, Math.ceil((sessionDurationSeconds / 60) * 450) + 100);
  if (currentScore > maxPossibleExp && sessionDurationSeconds > 10) {
    return { plausible: false, reason: 'Taxa de ganho de EXP excede o limite físico do jogo por minuto.' };
  }

  return { plausible: true };
}
