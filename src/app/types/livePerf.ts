// Purpose: Define the structure for live performance data
// used in src/app/components/LivePerfList.tsx

export interface LivePerformance {
  title: string;
  description: string;
  performanceDate: string; // In ISO format (YYYY-MM-DD)
  youtubeLink: string;
}
