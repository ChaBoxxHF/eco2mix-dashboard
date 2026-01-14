import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InfosPanel from "./components/InfosPanel/InfoPanel.jsx";
import MetropolisCard from "./components/MetropolisCard/MetropolisCard.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
