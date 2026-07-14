import { detectAll } from 'tinyld';

export const getTopMargin = (candidates: ReturnType<typeof detectAll>): number => {
  const best = candidates[0];
  const second = candidates[1];

  if (!best || !second) {
    return 1;
  }

  return (best.accuracy - second.accuracy) / best.accuracy;
};
