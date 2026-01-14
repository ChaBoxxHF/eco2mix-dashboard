import { useEffect, useState } from "react";
import "../../styles/InfosPanel.css";
import MetropolisCard from "../MetropolisCard/MetropolisCard";

function InfosPanel({ totalCities = 33, avgConsommation, period }) {
  const nbMetropole = totalCities;
  const consommationMoyen = avgConsommation;
  const periodObserv = period;

  const [count, setCount] = useState(0);
  // const [theme, setTheme] = useState("sombre");

  const [loading, setLoading] = useState(true);
  const [villes, setVilles] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [tri, setTri] = useState("none");
  const [triConsum, setTriConsum] = useState("none");
  const [filtreConsumption, setFiltreConsumption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json/eco2mix-metropoles-2025.json");
        const data = await response.json();

        // Transformer le JSON en tableau exploitable
        const villesTransformees = Object.entries(data)
          .map(([nomVille, villeData]) => {
            const datas = villeData?.datas;
            if (!datas) return null;

            const dates = Object.keys(datas);

            return {
              nom: nomVille,
              datas, // toutes les dates et heures
              dates, // dates disponibles
            };
          })
          .filter(Boolean);

        setVilles(villesTransformees);

        // initialiser la date et l'heure à la première disponible
        if (villesTransformees.length > 0) {
          const firstDate = villesTransformees[0].dates[0];
          setSelectedDate(firstDate);

          // toutes les heures disponibles pour cette date (union)
          const hoursSet = new Set();
          villesTransformees.forEach((v) => {
            if (v.datas[firstDate]) {
              Object.keys(v.datas[firstDate]).forEach((h) => hoursSet.add(h));
            }
          });
          const hoursArray = Array.from(hoursSet).sort();
          setSelectedHour(hoursArray[0] || "");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  if (loading) return <div>Chargement ...</div>;

  // toutes les dates pour le picker date
  const allDates = Array.from(
    new Set(villes.flatMap((ville) => ville.dates))
  ).sort();

  // toutes les heures pour le picker heure
  const allHours = Array.from(
    new Set(
      villes.flatMap(
        (ville) =>
          (ville.datas[selectedDate] &&
            Object.keys(ville.datas[selectedDate])) ||
          []
      )
    )
  ).sort();

  const handleClickCount = () => {
    console.log(count);
    setCount(count + 1);
  };

  const reinitialiser = () => {
    setCount(0);
  };

  // const handleClickTheme = () => {
  //   console.log("Changement de thème");
  //   setTheme(theme === "sombre" ? "clair" : "sombre");
  // };

  const handleRefresh = () => {
    setVilles([]);
    setRefresh(refresh + 1);
  };

  const toggleSortName = () => {
    // bascule tri par nom (désactive tri conso)
    setTriConsum("none");
    setTri((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const toggleSortConsum = () => {
    // bascule tri par consommation (désactive tri nom)
    setTri("none");
    setTriConsum((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const affichageVille = (() => {
    // enrichir avec la consommation pour la date/heure sélectionnées
    const enriched = villes.map((v) => {
      const dataHour = v.datas[selectedDate]?.[selectedHour] || {};
      const consommation = Number(dataHour.consommation ?? 0);
      return { ...v, _consommation: consommation };
    });

    // filtrer selon le seuil si > 0
    const filtered =
      filtreConsumption > 0
        ? enriched.filter((v) => v._consommation > filtreConsumption)
        : enriched;

    if (triConsum !== "none") {
      const sortedCons = [...filtered].sort(
        (a, b) => a._consommation - b._consommation
      );
      return triConsum === "asc" ? sortedCons : sortedCons.reverse();
    }

    if (tri !== "none") {
      const sortedName = [...filtered].sort((a, b) =>
        a.nom.localeCompare(b.nom, "fr")
      );
      return tri === "asc" ? sortedName : sortedName.reverse();
    }

    return filtered;
  })();

  const handleFiltrerConsumption = (e) => {
    const value = e.target.value;
    // stocker une valeur numérique (0 si vide ou invalide)
    setFiltreConsumption(value === "" ? null : Number(value));
  };

  return (
    <>
      <div>coucou!</div>
      <h3>Indicateurs clés</h3>
      <div /*className={`theme${theme}`}*/>
        <div className="indicator">
          <div id="ind1">Nombre Metropole = {nbMetropole}</div>
          <div id="ind2">consommationMoyen = {consommationMoyen}</div>
          <div id="ind3">periodObserv = {periodObserv}</div>

          <button
            onClick={handleClickCount}
            style={count >= 5 ? { background: "red" } : {}}>
            {count >= 5 ? "ALED" : "cliquez-moi"}
          </button>
          <button onClick={reinitialiser}>reinitialiser</button>
          <p>Nombre de fois cliqué : {count}</p>
          {/* <button onClick={handleClickTheme}>
            Changer thème (actuel: {`theme ${theme}`})
          </button> */}
        </div>
        <div>
          <button onClick={handleRefresh}>refresh</button>
          <button onClick={toggleSortName}>
            {tri === "asc" ? "Noms Z→A" : "Trier noms A→Z"}
          </button>
          <button onClick={toggleSortConsum}>
            {triConsum === "asc" ? "Conso décroissant" : "Conso croissante"}
          </button>
          <input
            type="number"
            min="0"
            placeholder="filtre consommation"
            value={filtreConsumption}
            onChange={handleFiltrerConsumption}
          />
        </div>

        <div style={{ margin: "1rem 0" }}>
          <label>
            Sélectionner la date :{" "}
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}>
              {allDates.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>

          <label style={{ marginLeft: "1rem" }}>
            Sélectionner l’heure :{" "}
            <select
              value={selectedHour}
              onChange={(e) => setSelectedHour(e.target.value)}>
              {allHours.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Affichage des cartes */}
        <div>
          {affichageVille.map((ville) => {
            const dataHour = ville.datas[selectedDate]?.[selectedHour] || {};

            // appliquer les valeurs par défaut si pas présentes
            const consommation = dataHour.consommation ?? 0;
            const production = dataHour.production ?? "inconnu";
            const echangePhysique = dataHour.echanges_physiques ?? "inconnu";

            return (
              <MetropolisCard
                key={ville.nom}
                nomVille={ville.nom}
                date={selectedDate}
                heure={selectedHour}
                consommation={consommation}
                production={production}
                echangePhysique={echangePhysique}
                // theme={theme}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InfosPanel;
