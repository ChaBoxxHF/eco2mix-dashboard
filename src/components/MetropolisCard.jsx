
import { useState } from "react";

export default function MetropolisCard({ libelle_metropole, consommation, echanges_physiques, production }) {

  const [isExpanded, setIsExpanded] = useState(false);
 
  return (
    <div className="metropolis-card">

      <h2 onClick={function handleToggle(){setIsExpanded(!isExpanded)}}>
        {libelle_metropole}
      </h2>

      {isExpanded === true && ( // syntaxe JSX : si isExpanded est vrai, alors on affiche le bloc
        <div className="card-content">
          <p>
            <span className="label">Consommation : </span>
            <span className="value">{consommation} MW</span>
          </p>
          <p>
            <span className="label">Échanges physiques : </span>
            <span className="value">{echanges_physiques} MW</span>
          </p>
          { production !== "ND" && (
            <p>
              <span className="label">Production : </span>
              <span className="value">{production} MW</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
