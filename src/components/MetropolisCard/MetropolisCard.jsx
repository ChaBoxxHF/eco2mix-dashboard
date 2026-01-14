import "./MetropolisCard.css";

function MetropolisCard({
  nomVille,
  date,
  heure,
  consommation,
  production,
  echangePhysique,
  theme,
}) {
  if (!nomVille) return null;

  return (
    <div className={`theme${theme}`}>
      <h2>Ville : {nomVille}</h2>

      <div className="card-content">
        <p>
          <span className="label">Date :</span>
          <span className="value">{date}</span>
        </p>

        <p>
          <span className="label">Heure :</span>
          <span className="value">{heure || <i>inconnu</i>}</span>
        </p>

        <p>
          <span className="label">Consommation :</span>
          <span className="value">{consommation}</span>
        </p>

        <p>
          <span className="label">Production :</span>
          <span
            className="value"
            style={{
              fontStyle: production === "inconnu" ? "italic" : "normal",
            }}>
            {production}
          </span>
        </p>

        <p>
          <span className="label">Échanges physiques :</span>
          <span
            className="value"
            style={{
              fontStyle: echangePhysique === "inconnu" ? "italic" : "normal",
            }}>
            {echangePhysique}
          </span>
        </p>
      </div>
    </div>
  );
}

export default MetropolisCard;
