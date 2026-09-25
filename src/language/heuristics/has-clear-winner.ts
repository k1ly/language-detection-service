import { LanguageCandidate } from '../interfaces';
import { getTopMargin } from './get-top-margin';
import { isAfrikaansDutchPair } from './is-afrikaans-dutch-pair';

const CLEAR_MARGIN = 0.15;

const AF_NL_MARGIN = 0.05;

export const hasClearWinner = (candidates: LanguageCandidate[]): boolean => {
  const margin = getTopMargin(candidates);

  if (margin >= CLEAR_MARGIN) {
    return true;
  }

  return isAfrikaansDutchPair(candidates) && margin >= AF_NL_MARGIN;
};
