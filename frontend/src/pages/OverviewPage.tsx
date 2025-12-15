import { useEffect, useState } from "react";
import type { IOverviewResponse, Page } from "../utils/models";
import API from "../Api";

interface IProps {
  onNext: (page: Page) => void;
}



function OverviewPage({ onNext }: IProps) {
  const [data, setData] = useState<IOverviewResponse | null>();


  useEffect(() => { 
    const loadData=async      ()=> { 
      const res = await API.getOverview();
      setData(res);
      console.log(res);
      
    };

    loadData();
  },[]);

  return (
    <div
      style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
        <button onClick={() => onNext("insight")}>Overview</button>
      </div>
    </div>
  );
}



export default OverviewPage;