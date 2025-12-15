export interface IInsightsResponse {
  headline: string;
  insights: {
    title: string;
    text: string;
    value: number;
  }[];
  visual: {
    type: "bar" | "chart" | "sparkline";
    values: number[];
  };
  navigation: {
    prev: string | null;
    next: string | null;
  };
}


export interface IOverviewResponse {
  sectionTitle: string;
  score: number;
  status: "Critical" | "Average" | "Strong";
  comparison: {
    value: number;
    label: string;
  };
  visual: {
    type: "radial" | "bar" | "segmented";
    max: number;
  };
}


export type Page = "overview" | "insight";