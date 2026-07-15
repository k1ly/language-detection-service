const HUNGARIAN_SPECIFIC_LETTERS = /[áéíóöőúüűÁÉÍÓÖŐÚÜŰ]/;

export const hasHungarianMarkers = (text: string): boolean =>
  HUNGARIAN_SPECIFIC_LETTERS.test(text);
