import "./MetropolisCard.css";
import myData from "/public/json/eco2mix-metropoles-2025-janvier-01.json";

function MetropolisCard() {
  const ville = "Paris";
  const consommation = "1200 MW";
  const villes = myData;
  console.log(villes);
  return (
    <>
      <div className="metropolis-card">
        <h2>nbVilles = {myData.length}</h2>
        <div className="card-content">
          <p>
            <span className="label">Consommation :</span>
            <span className="value">{consommation}</span>
          </p>
        </div>
      </div>
      {/* <div>{myData.map((ville)=>
        
      )}</div> */}
    </>
  );
}

export default MetropolisCard;
