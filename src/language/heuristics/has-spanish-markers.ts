const SPANISH_N_TILDE = /[ñÑ]/;
const SPANISH_PUNCTUATION = /[¿¡]/;

export const hasSpanishMarkers = (text: string): boolean =>
  SPANISH_N_TILDE.test(text) || SPANISH_PUNCTUATION.test(text);
