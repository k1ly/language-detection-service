import { getSuspiciousHiReplacement, getTopMargin, hasClearWinner } from '../heuristics';
import { LanguageCandidate } from '../interfaces';

const MIN_ACCURACY = 0.15;

const LOW_ACCURACY = 0.04;
const LOW_ACCURACY_MARGIN = 0.5;

export const getBestCandidate = (
  text: string,
  candidates: LanguageCandidate[],
): LanguageCandidate | null => {
  const replacement = getSuspiciousHiReplacement(text, candidates);

  if (replacement) {
    return replacement;
  }

  const best = candidates[0];

  if (best.accuracy >= MIN_ACCURACY && hasClearWinner(candidates)) {
    return best;
  }

  if (best.accuracy >= LOW_ACCURACY && getTopMargin(candidates) >= LOW_ACCURACY_MARGIN) {
    return best;
  }

  return null;
};
