import { detectAll } from 'tinyld';
import { LanguageSegment, SentenceSegment } from './interfaces';

const MIN_LETTERS = 3;

export const detectLanguage = (sentence: SentenceSegment): LanguageSegment => {
  const letters = [...sentence.text].filter((c) => /\p{Letter}/u.test(c)).length;

  if (letters < MIN_LETTERS) {
    return {
      ...sentence,
      language: null,
      confidence: 0,
    };
  }

  const candidates = detectAll(sentence.text);

  if (candidates.length === 0) {
    return {
      ...sentence,
      language: null,
      confidence: 0,
    };
  }

  const best = candidates[0];

  return {
    ...sentence,
    language: best.lang,
    confidence: best.accuracy ?? 0,
  };
};
