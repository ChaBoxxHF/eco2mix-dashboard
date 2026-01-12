import { useState } from "react";
import "./InfosPanel.css";

function InfosPanel({ totalCities = 33, avgConsommation, period }) {
  const nbMetropole = totalCities;
  const consommationMoyen = avgConsommation;
  const periodObserv = period;

  let [clickBouton, clicked] = useState(0);

  const handleClick = () => {
    console.log(clickBouton);
    clicked(clickBouton + 1);
  };

  const reinitialiser = () => {
    clicked((clickBouton = 0));
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
          style={clickBouton >= 5 ? { color: "red" } : {}}>
          cliquez-moi
        </button>
        <button onClick={reinitialiser}>reinitialiser</button>
        <p>Nombre de fois cliqué : {clickBouton}</p>
      </div>
    </>
  );
}

export default InfosPanel;
