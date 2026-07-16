import { LanguageCandidate } from '../interfaces';
import { hasClearWinner } from './has-clear-winner';
import { hasSpanishMarkers } from './has-spanish-markers';

const MIN_ACCURACY = 0.15;

export const getSpanishReplacement = (
  text: string,
  candidates: LanguageCandidate[],
): LanguageCandidate | null => {
  if (!hasSpanishMarkers(text)) {
    return null;
  }

  const best = candidates[0];
  const spanish = candidates.find((candidate) => candidate.lang === 'es');

  if (!best || !spanish || spanish.accuracy < MIN_ACCURACY) {
    return null;
  }

  if (best.lang === 'hu') {
    return spanish;
  }

  if (best.lang === 'es' && !hasClearWinner(candidates)) {
    return spanish;
  }

  return null;
};
