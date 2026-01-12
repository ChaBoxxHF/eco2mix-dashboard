import "./MetropolisCard.css";

function MetropolisCard() {
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
