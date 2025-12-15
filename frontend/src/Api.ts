import { IInsightsResponse, IOverviewResponse } from "./utils/models";

const API_URL = "http://localhost:3688";



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