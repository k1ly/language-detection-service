const segmenter = new Intl.Segmenter('und', {
  granularity: 'sentence',
});

export const splitText = (text: string): string[] => {
  return [...segmenter.segment(text)]
    .map((segment) => segment.segment.trim())
    .filter((segment) => segment.length > 0);
};
