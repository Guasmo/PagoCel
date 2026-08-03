export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  /** Category slug matching ayu-categories section */
  category: string;
  /** UI state: accordion open/closed */
  open: boolean;
  /** Computed max-height for CSS animation */
  height: number;
}
