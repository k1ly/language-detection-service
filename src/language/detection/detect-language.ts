import { detectAll } from 'tinyld';
import { Language } from '../interfaces';
import { countLetters } from '../utils';
import { getBestCandidate } from './get-best-candidate';
import { resolveLanguage } from './resolve-language';

const MIN_LETTERS = 30;

export const detectLanguage = (text: string): Language | null => {
  if (countLetters(text) < MIN_LETTERS) {
    return null;
  }

  const candidates = detectAll(text);

  const candidate = getBestCandidate(text, candidates);

  if (!candidate) {
    return null;
  }

  return {
    language: resolveLanguage(candidate.lang, text),
    confidence: candidate.accuracy ?? 0,
  };
};
