import { useState } from "react";
import "./InfosPanel.css";

function InfosPanel({ totalCities = 33, avgConsommation, period }) {
  //normalement y'as pas besoins de constantes, j'avais juste la flemme d'aller modifier plus bas :)
  const nbMetropole = totalCities;
  const consommationMoyen = avgConsommation;
  const periodObserv = period;

  let [count, setCount] = useState(0);

  const handleClick = () => {
    console.log(count);
    setCount(count + 1);
  };

  const reinitialiser = () => {
    setCount((count = 0));
  };

  return (
    <>
      <div>coucou!</div>
      <h3>Indicateurs clés</h3>
      <div className="indicator">
        <div id="ind1">Nombre Metropole = {nbMetropole}</div>
        <div id="ind2">consommationMoyen = {consommationMoyen}</div>
        <div id="ind3">periodObserv = {periodObserv}</div>

        <button
          onClick={handleClick}
          style={count >= 5 ? { background: "red" } : {}}>
          {count >= 5 ? "ALED" : "cliquez-moi"}
        </button>
        <button onClick={reinitialiser}>reinitialiser</button>
        <p>Nombre de fois cliqué : {count}</p>
      </div>
    </>
  );
}

export default InfosPanel;
