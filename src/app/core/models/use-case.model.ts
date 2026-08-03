export interface UseCase {
  title: string;
  description: string;
  /** Industry/sector slug (e.g. 'retail', 'restaurant', 'pharmacy') */
  sector: string;
  /** Icon name or SVG path */
  icon: string;
}
