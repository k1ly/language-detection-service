import { LanguageCandidate } from '../interfaces';
import { getScriptRatio } from './get-script-ratio';
import { hasHungarianMarkers } from './has-hungarian-markers';

const MIN_EN_ACCURACY = 0.1;

export const getSuspiciousHuReplacement = (
  text: string,
  candidates: LanguageCandidate[],
): LanguageCandidate | null => {
  const best = candidates[0];

  if (!best || best.lang !== 'hu' || hasHungarianMarkers(text)) {
    return null;
  }

  if (getScriptRatio(text, 'Latin') <= 0.8) {
    return null;
  }

  const english = candidates.find((candidate) => candidate.lang === 'en');

  if (!english || english.accuracy < MIN_EN_ACCURACY) {
    return null;
  }

  return english;
};
