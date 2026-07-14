import { collectLanguages } from './collect-languages';
import { detectLanguage } from './detect-languages';
import { LanguageSegment } from './interfaces';
import { mergeSegments } from './merge-segments';
import { parseText } from './parse-text';

export const getTextSegments = (text: string): LanguageSegment[] => {
  if (!text.length) {
    return [];
  }

  const sentences = parseText(text);

  const segments = sentences.map((sentence) => detectLanguage(sentence));

  return mergeSegments(segments);
};

export const getTextLanguages = (text: string): string[] => {
  if (!text.length) {
    return [];
  }

  const sentences = parseText(text);

  const segments = sentences.map((sentence) => detectLanguage(sentence));

  const languages = collectLanguages(segments);

  return languages.map((l) => l.language);
};
