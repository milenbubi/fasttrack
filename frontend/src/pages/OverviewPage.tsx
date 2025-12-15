import { useEffect, useMemo, useState } from "react";
import API from "../Api";
import { IOverviewResponse } from "../utils/models";
import { overviewStyles, statusStyles } from "./utils";



function OverviewPage() {
  const [data, setData] = useState<IOverviewResponse | null>();


  const helperData = useMemo(() => {
    if (!data) {
      return null;
    }

    const score = Math.max(0, Math.min(100, data.score));
    const statusStyle = statusStyles[data.status];

    const comparisonSign = data.comparison.value > 0 ? "+" : "";
    const comparisonText = `${comparisonSign}${data.comparison.value}% ${data.comparison.label}`;

    return { score, statusStyle, comparisonText };
  }, [data]);


  useEffect(() => {
    const loadData = async () => {
      const res = await API.getOverview();
      setData(res);
    };

    loadData();
  }, []);


  if (!data || !helperData) {
    return null;
  }


  const { score, statusStyle, comparisonText } = helperData;


  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

      <div style={overviewStyles.card}>
        <div style={overviewStyles.headerRow}>
          <h1 style={overviewStyles.title}>{data.sectionTitle}</h1>
          <span style={{ ...overviewStyles.badge, background: statusStyle.bg, color: statusStyle.text }}>
            {data.status}
          </span>
        </div>

        <div style={overviewStyles.mainRow}>
          <div>
            <div style={overviewStyles.score}>{score}%</div>
            <div style={overviewStyles[data.comparison.value >= 0 ? "subP" : "subN"]}>{comparisonText}</div>
          </div>

          {/* Visual score element: simple progress bar */}
          <div style={overviewStyles.barWrap} aria-label="Score visualization">
            <div style={overviewStyles.barTrack}>
              <div style={{ ...overviewStyles.barFill, width: `${score}%` }} />
            </div>
            <div style={overviewStyles.barLegend}>
              <span>{0}</span>
              <span>{100}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default OverviewPage;