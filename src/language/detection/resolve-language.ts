import { hasSpanishMarkers } from '../heuristics';

const RUSSIAN_SPECIFIC_LETTERS = /[ыёЫЁ]/;

export const resolveLanguage = (language: string, text: string): string => {
  if (language === 'bg' && RUSSIAN_SPECIFIC_LETTERS.test(text)) {
    return 'ru';
  }

  if (language === 'hu' && hasSpanishMarkers(text)) {
    return 'es';
  }

  return language;
};
