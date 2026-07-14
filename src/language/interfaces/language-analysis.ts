import { LanguageSegment } from './language-segment';
import { LanguageStat } from './language-stat';

export interface LanguageAnalysis {
  segments: LanguageSegment[];
  languages: LanguageStat[];
}
