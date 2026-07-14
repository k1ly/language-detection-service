import { LanguageSegment } from './interfaces';

export const mergeSegments = (segments: LanguageSegment[]): LanguageSegment[] => {
  if (segments.length === 0) {
    return [];
  }

  const merged: LanguageSegment[] = [];

  for (const current of segments) {
    const previous = merged.at(-1);

    if (previous && previous.language && previous.language === current.language) {
      previous.text += ' ' + current.text;
      previous.end = current.end;
      previous.confidence = Math.max(previous.confidence, current.confidence);

      continue;
    }

    merged.push({ ...current });
  }

  return merged;
};
