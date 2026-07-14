import { LanguageSegment, LanguageStat } from './interfaces';

export const collectLanguages = (segments: LanguageSegment[]): LanguageStat[] => {
  const map = new Map<string, LanguageStat>();

  for (const segment of segments) {
    if (!segment.language) {
      continue;
    }

    const existing = map.get(segment.language);

    if (existing) {
      existing.segments++;
      existing.characters += segment.text.length;
      continue;
    }

    map.set(segment.language, {
      language: segment.language,
      segments: 1,
      characters: segment.text.length,
    });
  }

  return [...map.values()].sort((a, b) => b.characters - a.characters);
};
