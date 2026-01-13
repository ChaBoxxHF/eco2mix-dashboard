import { useState } from "react";
import "./MetropolisCard.css";

function MetropolisCard({ nomVille, date, heures = [] }) {
  // heure sélectionnée (par défaut la première)
  const [heureSelectionnee, setHeureSelectionnee] = useState(
    heures[0]?.heure || ""
  );

  // données correspondant à l’heure sélectionnée
  const dataHeure = heures.find((h) => h.heure === heureSelectionnee);

  if (!nomVille || !dataHeure) return null;

  return (
    <div className="metropolis-card">
      <h2>Ville : {nomVille}</h2>

      <div className="card-content">
        <p>
          <span className="label">Date :</span>
          <span className="value">{date}</span>
        </p>

        <p>
          <span className="label">Heure :</span>
          <select
            value={heureSelectionnee}
            onChange={(e) => setHeureSelectionnee(e.target.value)}>
            {heures.map((h) => (
              <option key={h.heure} value={h.heure}>
                {h.heure}
              </option>
            ))}
          </select>
        </p>

        <p>
          <span className="label">Consommation :</span>
          <span className="value">{dataHeure.consommation}</span>
        </p>

        <p>
          <span className="label">Production :</span>
          <span className="value">{dataHeure.production}</span>
        </p>

        <p>
          <span className="label">Échanges physiques :</span>
          <span className="value">{dataHeure.echangePhysique}</span>
        </p>
      </div>
    </div>
  );
}

export default MetropolisCard;
