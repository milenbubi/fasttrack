import type { IInsightsResponse, IOverviewResponse } from "./utils/models";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL is not defined");
}


 async function getOverview(): Promise<IOverviewResponse> {
  const res = await fetch(`${API_URL}/overview`);

  if (!res.ok) {
    throw new Error("Failed to load overview");
  }

  return res.json();
}


async function getInsights(): Promise<IInsightsResponse> {
  const res = await fetch(`${API_URL}/insights`);

  if (!res.ok) {
    throw new Error("Failed to load insights");
  }

  return res.json();
}


const API = {
  getOverview,
  getInsights
}


export default API;