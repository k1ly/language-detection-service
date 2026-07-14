import { detectLanguage } from './detection';
import { Language } from './interfaces';
import { prepareText, splitText } from './preprocess';

export const detectTextLanguages = (text: string, split = true): Language[] => {
  const preparedText = prepareText(text);

  if (!preparedText.length) {
    return [];
  }

  const segments = split ? splitText(preparedText) : [preparedText];

  return segments.map(detectLanguage).filter((language): language is Language => language !== null);
};
