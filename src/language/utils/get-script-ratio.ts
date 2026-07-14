import { countLetters } from './count-letters';

const SCRIPT_REGEX = {
  Cyrillic: /\p{Script=Cyrillic}/u,
  Latin: /\p{Script=Latin}/u,
} as const;

export const getScriptRatio = (text: string, script: keyof typeof SCRIPT_REGEX): number => {
  const letters = countLetters(text);

  if (!letters) {
    return 0;
  }

  let matchingLetters = 0;

  for (const character of text) {
    if (SCRIPT_REGEX[script].test(character)) {
      matchingLetters++;
    }
  }

  return matchingLetters / letters;
};
