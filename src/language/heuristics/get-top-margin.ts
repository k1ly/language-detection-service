import { LanguageCandidate } from '../interfaces';

export const getTopMargin = (candidates: LanguageCandidate[]): number => {
  const best = candidates[0];
  const second = candidates[1];

  if (!best || !second) {
    return 1;
  }

  return (best.accuracy - second.accuracy) / best.accuracy;
};
