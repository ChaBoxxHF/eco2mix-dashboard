import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MetropolisDetail() {
  // (re)récupérons les données des relevés
  const [metropolisesDatas, setMetropolisesDatas] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setLoading(true);
        const response = await fetch("/json/eco2mix-metropoles-2025.json");
        const datas = await response.json();
        setMetropolisesDatas(datas);
        // concentrons nous sur l’essentiel
        // donc pas de gestion de loading/error dans le cas présent}
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDatas();
  }, []);

  if (loading) return <div>Chargement ...</div>;

  const { id } = useParams();

  const metropoleDatas = Object.values(metropolisesDatas).find(
    (m) => m.code_insee_epci === id
  );

  console.log(metropoleDatas);

  return (
    <section>
      <h1>Détails de la métropole</h1>
      <p>
        Identifiant depuis l'URL : <strong>{id}</strong>
      </p>
      {/* 3. Pour terminer : affichons les données de tous les relevés
de la métropole dont l’id est celui contenu dans l’URL */}
      {metropoleDatas !== undefined &&
        Object.entries(metropoleDatas.datas).map(([date, heures]) => (
          <div key={date}>
            <h2>{date}</h2>
            {Object.entries(heures).map(([heure, valeurs]) => (
              <div key={heure}>
                <strong>{heure}</strong>
                <p>Consommation: {valeurs.consommation} MW</p>
                <p>Production: {valeurs.production}</p>
                <p>Échanges: {valeurs.echanges_physiques}</p>
              </div>
            ))}
          </div>
        ))}
    </section>
  );
}

export default MetropolisDetail;
