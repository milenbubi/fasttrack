import * as ReactDOM from "react-dom/client";
import "./styles/index.css"
import AppEntry from "./AppEntry.tsx"


function FastTrackApp() {
  return (
      <AppEntry />
  );
}


const container = document.getElementById("Root");
const root = ReactDOM.createRoot(container!);
root.render(<FastTrackApp />);