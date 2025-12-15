import type { Page } from "../utils/models";

interface IProps {
  onBack: (page: Page) => void;
}



function InsightPage({ onBack }: IProps) {



  return (
    <div
      style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
        <button onClick={() => onBack("insight")}>Insight</button>
      </div>
    </div>
  );
}



export default InsightPage;