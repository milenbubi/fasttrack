import { useEffect, useState } from "react"
import { Page } from "./utils/models";
import InsightPage from "./pages/InsightPage";
import OverviewPage from "./pages/OverviewPage";
import RouterButton from "./components/RouterButton";
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



  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", gap: 20, padding: 10 }}>
      {page && (page === "overview" ? <OverviewPage /> : <InsightPage />)}
      {page && <RouterButton page={page} onClick={navigate} />}
    </div>
  );
}



export default AppEntry;