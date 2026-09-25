import { detectAll } from 'tinyld';
import { Language } from '../interfaces';
import { countLetters, getMinLetters } from '../utils';
import { getBestCandidate } from './get-best-candidate';
import { resolveLanguage } from './resolve-language';

export const detectLanguage = (text: string): Language | null => {
  if (countLetters(text) < getMinLetters(text)) {
    return null;
  }

  const candidates = detectAll(text);

  if (candidates.length === 0) {
    return null;
  }

  const candidate = getBestCandidate(text, candidates);

  if (!candidate) {
    return null;
  }

  return {
    language: resolveLanguage(candidate.lang, text),
    confidence: candidate.accuracy ?? 0,
  };
};
