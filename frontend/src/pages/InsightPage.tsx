import { useEffect, useState } from "react";
import API from "../Api";
import { overviewStyles } from "./utils";
import { IInsightsResponse } from "../utils/models";



function InsightsPage() {
  const [data, setData] = useState<IInsightsResponse | null>(null);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    const loadData = async () => {
      const res = await API.getInsights();
      setData(res);
    };

    loadData();
  }, []);


  useEffect(() => {
    setTimeout(() => {
      data && setLoaded(true);
    }, 100);
  }, [data]);


  if (!data) {
    return null;
  }


  const maxValue = Math.max(...data.visual.values);


  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <div style={overviewStyles.card}>
        <h1 style={{ ...overviewStyles.title, marginBottom: 24 }}>{data.headline}</h1>

        {/* Details */}
        <div style={{ display: "grid", gap: 20 }}>
          {data.insights.map((insight) => (
            <div key={insight.title} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ flex: 1, color: "#000000" }}>
                <strong>{insight.title}</strong>
                <p style={{ margin: "4px 0", fontSize: 14, color: "#374151a1" }}>{insight.text}</p>
              </div>
              {/* Mini visual bar */}
              <div>
                <div style={{ width: 120, height: 10, background: "#E5E7EB", borderRadius: 6, overflow: "hidden" }}>
                  <div
                    style={{
                      width: loaded ? `${insight.value}%` : 0,
                      height: "100%",
                      background: "#4F46E5",
                      borderRadius: 6,
                      transition: "width 1000ms ease",
                    }}
                  />
                </div>
                <div style={{ ...overviewStyles.barLegend, width: "100%" }}>
                  <span>{0}</span>
                  <span>{100}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual summary */}
        <div style={{ display: "flex", gap: 16, alignItems: "flex-end", marginTop: 32 }}>
          {data.insights.map((insight) => {
            const bg = insight.value < 40 ? "#F87171" : insight.value < 60 ? "#FBBF24" : "#34D399";

            return (
              <div key={insight.title} style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", height: 250 }}>
                {/* Барът */}
                <div
                  style={{
                    width: 74,
                    height: loaded ? `${(insight.value / maxValue) * 100}%` : 0,
                    background: bg,
                    borderRadius: 6,
                    transition: "height 1000ms ease",
                  }}
                  title={`${insight.title}: ${insight.value}`}
                />
                {/* Име под бара */}
                <span style={{ marginTop: 8, fontSize: 12, color: "#374151", textAlign: "center" }}>
                  {insight.title}
                </span>
                <span style={{ marginTop: 4, fontSize: 12, color: "#0b244dff", textAlign: "center" }}>
                  {insight.value + "%"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}



export default InsightsPage;