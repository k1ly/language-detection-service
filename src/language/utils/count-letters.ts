const LETTER_REGEX = /\p{Letter}/u;

export const countLetters = (text: string): number => {
  let count = 0;

  for (const character of text) {
    if (LETTER_REGEX.test(character)) {
      count++;
    }
  }

  return count;
};
