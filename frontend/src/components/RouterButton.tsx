import Arrow from "./Arrow";
import "../styles/routerButton.css";
import { Page } from "../utils/models";

interface IProps {
  page: Page;
  onClick: (pag: Page) => void;
}



function RouterButton({ page, onClick }: IProps) {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

      {page === "overview" && (
        <button onClick={() => onClick("insight")}>{"View Insights"}</button>
      )}

      {page === "insight" && (
        <div style={{ display: "flex", height: 28, gap: 40, alignItems: "center" }}>
          <div style={{ display: "flex", height: "100%", gap: 5, cursor: "pointer" }} onClick={() => onClick("overview")}>
            <div style={{ transform: "scale(-0.7, 0.7)" }}><Arrow /></div>
            <button>{"Back to Overview"}</button>
          </div>

          <div style={{ display: "flex", height: "100%", gap: 5, cursor: "pointer" }}>
            <button>{"Next insight"}</button>
            <div style={{ transform: "scale(0.7)" }}><Arrow /></div>
          </div>
        </div>
      )}

    </div>
  );
}



export default RouterButton;