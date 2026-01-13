import { useEffect, useState } from "react";
import "./InfosPanel.css";
import MetropolisCard from "../MetropolisCard/MetropolisCard";

function InfosPanel({ totalCities = 33, avgConsommation, period }) {
  //normalement y'as pas besoins de constantes, j'avais juste la flemme d'aller modifier plus bas :)
  const nbMetropole = totalCities;
  const consommationMoyen = avgConsommation;
  const periodObserv = period;

  let [count, setCount] = useState(0);
  const [theme, setTheme] = useState("sombre");
  const [loading, setLoading] = useState(true);
  const [donneeJson, setDonneeJson] = useState(null);
  const [villes, setVilles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const villes = await fetch(
          "/json/eco2mix-metropoles-2025-janvier-01.json"
        )
          .then((response) => response.json())
          .then((data) => {
            setDonneeJson(data);
          });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (donneeJson) {
      setVilles(Object.keys(donneeJson));
    }
  }, [donneeJson]);

  if (loading) {
    return <div>Chargement ...</div>;
  }

  const handleClickCount = () => {
    console.log(count);
    setCount(count + 1);
  };

  const reinitialiser = () => {
    setCount((count = 0));
  };

  const handleClickTheme = () => {
    console.log("Changement de thème");
    setTheme(theme === "sombre" ? "clair" : "sombre");
  };

  const chargerConsommationJournalière = (data) => {};

  return (
    <>
      {console.log(villes)}
      {console.log(donneeJson)}
      <div>coucou!</div>
      <h3>Indicateurs clés</h3>
      <div className={`theme${theme}`}>
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
          <button onClick={handleClickTheme}>
            Changer thème (actuel: {`theme ${theme}`})
          </button>
        </div>
        <div>
          <h1>affichage de quelques données :</h1>
          <div>
            <MetropolisCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default InfosPanel;
