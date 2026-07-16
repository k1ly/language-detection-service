import { countLetters } from './count-letters';

const MIN_LETTERS = 30;
const MIN_LETTERS_OTHER_SCRIPTS = 1;

const LETTER_REGEX = /\p{Letter}/u;
const LATIN_CYRILLIC_REGEX = /\p{Script=Latin}|\p{Script=Cyrillic}/u;

const LATIN_CYRILLIC_RATIO_THRESHOLD = 0.8;

export const getMinLetters = (text: string): number => {
  const letters = countLetters(text);

  if (letters === 0) {
    return MIN_LETTERS;
  }

  let latinCyrillicLetters = 0;

  for (const character of text) {
    if (LETTER_REGEX.test(character) && LATIN_CYRILLIC_REGEX.test(character)) {
      latinCyrillicLetters++;
    }
  }

  if (latinCyrillicLetters / letters < LATIN_CYRILLIC_RATIO_THRESHOLD) {
    return MIN_LETTERS_OTHER_SCRIPTS;
  }

  return MIN_LETTERS;
};
