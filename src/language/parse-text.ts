import { SentenceSegment } from './interfaces';

const segmenter = new Intl.Segmenter('und', {
  granularity: 'sentence',
});

export const parseText = (text: string): SentenceSegment[] => {
  return [...segmenter.segment(text)]
    .map((segment) => ({
      text: segment.segment.trim(),
      start: segment.index,
      end: segment.index + segment.segment.length,
    }))
    .filter((segment) => segment.text.length > 0);
};
