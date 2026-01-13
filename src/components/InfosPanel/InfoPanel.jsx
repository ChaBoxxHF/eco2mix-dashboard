import { useEffect, useState } from "react";
import "./InfosPanel.css";
import MetropolisCard from "../MetropolisCard/MetropolisCard";

function InfosPanel({ totalCities = 33, avgConsommation, period }) {
  const nbMetropole = totalCities;
  const consommationMoyen = avgConsommation;
  const periodObserv = period;

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("sombre");
  const [loading, setLoading] = useState(true);
  const [villes, setVilles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/json/eco2mix-metropoles-2025-janvier-01.json"
        );
        const data = await response.json();

        // 🔹 Transformation du JSON pour ne prendre que 5 premières heures par ville
        const villesTransformees = Object.entries(data)
          .map(([nomVille, villeData]) => {
            const datas = villeData?.datas;
            if (!datas) return null;

            const [date] = Object.keys(datas);
            if (!date) return null;

            const heures = Object.entries(datas[date])
              .sort()
              .map(([heure, values]) => ({
                heure,
                consommation: values.consommation,
                production: values.production,
                echangePhysique: values.echanges_physiques,
              }));

            return {
              nom: nomVille,
              date,
              heures,
            };
          })
          .filter(Boolean);

        setVilles(villesTransformees);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement ...</div>;
  }

  return (
    <>
      <div>coucou!</div>
      <h3>Indicateurs clés</h3>

      <div className={`theme${theme}`}>
        <div className="indicator">
          <div id="ind1">Nombre Metropole = {nbMetropole}</div>
          <div id="ind2">consommationMoyen = {consommationMoyen}</div>
          <div id="ind3">periodObserv = {periodObserv}</div>

          <button
            onClick={() => setCount(count + 1)}
            style={count >= 5 ? { background: "red" } : {}}>
            {count >= 5 ? "ALED" : "cliquez-moi"}
          </button>

          <button onClick={() => setCount(0)}>reinitialiser</button>

          <p>Nombre de fois cliqué : {count}</p>

          <button
            onClick={() => setTheme(theme === "sombre" ? "clair" : "sombre")}>
            Changer thème (actuel: theme {theme})
          </button>
        </div>

        <div>
          <h1>Affichage de quelques données :</h1>

          <div>
            {villes.map((ville) => (
              <MetropolisCard
                key={ville.nom}
                nomVille={ville.nom}
                date={ville.date}
                heures={ville.heures}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfosPanel;
