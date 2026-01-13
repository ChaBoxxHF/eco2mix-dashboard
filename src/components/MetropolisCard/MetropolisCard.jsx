import { useState } from "react";
import "./MetropolisCard.css";
import myData from "/public/json/eco2mix-metropoles-2025-janvier-01.json";

function MetropolisCard({ nomVille = "", consommationJournée = 0 }) {
  // const ville = "Paris";
  // const consommation = "1200 MW";
  // const villes = myData;
  // console.log(villes);

  if (nomVille === "" && consommationJournée === 0) {
    return <></>;
  }

  return (
    <>
      <div className="metropolis-card">
        <h2>Ville : {nomVille}</h2>
        <div className="card-content">
          <p>
            <span className="label">Consommation :</span>
            <span className="value">{consommationJournée}</span>
          </p>
        </div>
      </div>
      {/* <div>{myData.map((ville)=>
        
      )}</div> */}
    </>
  );
}

export default MetropolisCard;
