import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import InfosPanel from "./components/InfosPanel/InfoPanel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InfosPanel />
  </StrictMode>
);
