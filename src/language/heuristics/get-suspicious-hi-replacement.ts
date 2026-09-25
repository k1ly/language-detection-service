import { LanguageCandidate } from '../interfaces';
import { getScriptRatio } from './get-script-ratio';

const CYRILLIC_LANGUAGES = new Set(['ru', 'uk', 'bg', 'sr', 'mk', 'be', 'kk', 'mn']);

export const getSuspiciousHiReplacement = (
  text: string,
  candidates: LanguageCandidate[],
): LanguageCandidate | null => {
  const best = candidates[0];
  const second = candidates[1];

  if (!best || best.lang !== 'hi' || !second) {
    return null;
  }

  if (getScriptRatio(text, 'Cyrillic') > 0.8 && CYRILLIC_LANGUAGES.has(second.lang)) {
    return second;
  }

  if (getScriptRatio(text, 'Latin') > 0.8 && second.lang === 'en') {
    return second;
  }

  return null;
};
