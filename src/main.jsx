import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InfosPanel from "./components/InfosPanel/InfoPanel.jsx";
import MetropolisCard from "./components/MetropolisCard/MetropolisCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MetropolisCard />
    <InfosPanel />
  </StrictMode>
);
