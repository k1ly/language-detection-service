import { SentenceSegment } from './sentence-segment';

export interface LanguageSegment extends SentenceSegment {
  language: string | null;
  confidence: number;
}
