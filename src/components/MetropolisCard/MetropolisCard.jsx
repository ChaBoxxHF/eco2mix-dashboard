import "./MetropolisCard.css";
import myData from "/eco2mix-dashboard//public/json/eco2mix-metropoles-2025-janvier-01.json";

function MetropolisCard() {
    const liste = myData.map(() =>)
  const ville = "Paris";
  const consommation = "1200 MW";
  return (
    <div className="metropolis-card">
      <h2>{ville}</h2>
      <div className="card-content">
        <p>
          <span className="label">Consommation :</span>
          <span className="value">{consommation}</span>
        </p>
      </div>
    </div>
  );
}

export default MetropolisCard;
