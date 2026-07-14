import { detectAll } from 'tinyld';

export const isAfrikaansDutchPair = (candidates: ReturnType<typeof detectAll>): boolean => {
  const best = candidates[0];
  const second = candidates[1];

  if (!best || !second) {
    return false;
  }

  return (
    (best.lang === 'af' && second.lang === 'nl') || (best.lang === 'nl' && second.lang === 'af')
  );
};
