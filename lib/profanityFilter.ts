// Profanity and XSS filter utility for visitor names
const BLOCKED_TERMS = [
  'precheca', 'prexeca', 'filha da puta', 'filho da puta', 'fdp', 'pinto', 'pau', 'rola',
  'buceta', 'bct', 'penis', 'caralho', 'crl', 'porra', 'puta', 'puto', 'cu', 'vai tomar no cu',
  'vtnc', 'arrombado', 'arrombada', 'viado', 'viadinho', 'corno', 'xoxota', 'choxota',
  'bosta', 'merda', 'cacete', 'foder', 'fode', 'fodase', 'foda-se', 'boquete', 'siririca',
  'punheta', 'esporra', 'vagabundo', 'vagabunda', 'otario', 'otaria', 'babaca', 'nazista',
  'hitler', 'sexo', 'porn', 'xxx', 'dick', 'pussy', 'bitch', 'asshole', 'fuck',
  'script', 'iframe', 'javascript', 'onload', 'onerror', 'eval', 'document', 'cookie', 'window',
  // Specific anti-troll pattern
  'hallison', 'hall-is-on', 'hall_is_on', 'hall is on', 'halison'
];

export function sanitizeText(input: string): string {
  if (!input) return '';
  return input
    // Strip any HTML tags
    .replace(/<[^>]*>?/gm, '')
    // Remove dangerous characters for XSS/injection
    .replace(/[<>"'`;/\\{}()&$=*%]/g, '')
    // Allow only letters, numbers, spaces, dots, hyphens and accented letters
    .replace(/[^a-zA-Z0-9À-ÿ\s.\-_]/g, '')
    .trim();
}

export function validatePlayerName(name: string): { valid: boolean; error?: string; cleanName: string } {
  // 1. Initial sanitization against HTML / XSS
  const sanitized = sanitizeText(name || '');

  if (!sanitized || sanitized.length < 2) {
    return { valid: false, error: 'O nome precisa ter pelo menos 2 caracteres válidos (sem tags HTML).', cleanName: '' };
  }

  if (sanitized.length > 20) {
    return { valid: false, error: 'O nome pode ter no máximo 20 letras.', cleanName: '' };
  }

  // 2. Normalize to check for accented/leetspeak profanity
  const normalized = sanitized
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[@4]/g, 'a')
    .replace(/[3]/g, 'e')
    .replace(/[1!|]/g, 'i')
    .replace(/[0]/g, 'o')
    .replace(/[5$]/g, 's')
    .replace(/[7]/g, 't')
    .replace(/[^a-z0-9\s]/g, '');

  for (const term of BLOCKED_TERMS) {
    const termRegex = new RegExp(`\\b${term}\\b|${term}`, 'i');
    if (termRegex.test(normalized)) {
      return {
        valid: false,
        error: 'Nome impróprio ou não permitido. Por favor, insira um nome válido.',
        cleanName: ''
      };
    }
  }

  // 3. Capitalize nicely (e.g. "joao silva" -> "João Silva")
  const formatted = sanitized
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return { valid: true, cleanName: formatted };
}

