import type { Page } from "./models";


export function getPageFromQuery(): Page {
  const params = new URLSearchParams(window.location.search);
  return normalizePageName(params.get("page"));
}


export function normalizePageName(page: string | null): Page {
  return page === "insight" ? "insight" : "overview";
}