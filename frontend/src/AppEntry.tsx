import { useEffect, useState } from "react"
import type { Page } from "./utils/models";
import InsightPage from "./pages/InsightPage";
import OverviewPage from "./pages/OverviewPage";
import { getPageFromQuery, normalizePageName } from "./utils/router";



function AppEntry() {
  const [page, setPage] = useState<Page | null>(null);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const normalized = normalizePageName(params.get("page"));

    // auto-fix invalid query
    params.set("page", normalized);
    window.history.replaceState({}, "", `?${params.toString()}`);

    setPage(normalized);

    const onPopState = () => {
      setPage(getPageFromQuery());
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);


  const navigate = (next: Page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", next);
    window.history.pushState({}, "", `?${params.toString()}`);
    setPage(next);
  };


  if (!page) {
    return null;
  }


  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {page === "overview" ?
        <OverviewPage onNext={() => navigate("insight")} />
        :
        <InsightPage onBack={() => navigate("overview")} />
      }
    </div>
  );
}



export default AppEntry;