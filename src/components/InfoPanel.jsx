import { useEffect, useState } from "react";
import "./InfoPanel.css";

export default function InfoPanel({ totalCities, avgConsumption, period }) {
  const [clickCount, setclickCount] = useState(0);

  function handleCountClick() {
    setclickCount(clickCount + 1);
  }

  const handleResetCount = () => setclickCount(0);

  return (
    <section id="info-panel">
      <h3>Indicateurs Clés</h3>
      <button
        id="compteur"
        type="button"
        className={clickCount > 10 ? "important" : ""}
        onClick={handleCountClick}>
        +1 : {clickCount}
      </button>
      <button type="button" onClick={handleResetCount}>
        Reset Count
      </button>
      <div id="indicators">
        <div className="indicator-total">
          <span>Nombre total de métropoles : </span>
          <span>{totalCities}</span>
        </div>
        <div className="indicator-average">
          <span>Consommation Moyenne : </span>
          <span>{avgConsumption} MW</span>
        </div>
        <div className="indicator-period">
          <span>Période d'observation : </span>
          <span>{period}</span>
        </div>
      </div>
    </section>
  );
}
