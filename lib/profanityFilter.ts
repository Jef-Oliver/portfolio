// Profanity filter utility for visitor names
const BLOCKED_TERMS = [
  'precheca', 'prexeca', 'filha da puta', 'filho da puta', 'fdp', 'pinto', 'pau', 'rola',
  'buceta', 'bct', 'penis', 'caralho', 'crl', 'porra', 'puta', 'puto', 'cu', 'vai tomar no cu',
  'vtnc', 'arrombado', 'arrombada', 'viado', 'viadinho', 'corno', 'xoxota', 'choxota',
  'bosta', 'merda', 'cacete', 'foder', 'fode', 'fodase', 'foda-se', 'boquete', 'siririca',
  'punheta', 'esporra', 'vagabundo', 'vagabunda', 'otario', 'otaria', 'babaca', 'nazista',
  'hitler', 'sexo', 'porn', 'xxx', 'dick', 'pussy', 'bitch', 'asshole', 'fuck'
];

export function validatePlayerName(name: string): { valid: boolean; error?: string; cleanName: string } {
  const trimmed = name.trim();

  if (!trimmed || trimmed.length < 2) {
    return { valid: false, error: 'O nome precisa ter pelo menos 2 letras.', cleanName: '' };
  }

  if (trimmed.length > 20) {
    return { valid: false, error: 'O nome pode ter no máximo 20 letras.', cleanName: '' };
  }

  // Normalize to check for accented/leetspeak profanity
  const normalized = trimmed
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
        error: 'Nome impróprio ou não permitido. Por favor, insira seu nome real.',
        cleanName: ''
      };
    }
  }

  // Capitalize nicely (e.g. "joao silva" -> "João Silva")
  const formatted = trimmed
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return { valid: true, cleanName: formatted };
}
