import removeMd from 'remove-markdown';

export const prepareText = (text: string): string => {
  return removeMd(text)
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/#[^\s#]+/g, ' ')
    .replace(/^\d+\-\s*$/gm, '')
    .replace(/[^\S\n]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};
