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
  status: Status;
  comparison: {
    value: number;
    label: string;
  };
}



export type Page = "overview" | "insight";
export type Status = "Critical" | "Average" | "Strong";