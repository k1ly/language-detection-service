// ő and ű are almost exclusive to Hungarian among Latin-script languages.
const HUNGARIAN_SPECIFIC_LETTERS = /[őűŐŰ]/;

export const hasHungarianMarkers = (text: string): boolean =>
  HUNGARIAN_SPECIFIC_LETTERS.test(text);
