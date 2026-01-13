import { useEffect, useState } from "react";
import MetropolisCard from "./components/MetropolisCard";
import DashboardHeader from "./components/DashboardHeader";
import InfoPanel from "./components/InfoPanel";

import "./App.css";

export default function App() {
  const [metropolisesDatas, setMetropolisesDatas] = useState({});

  // ajout des deux nouveaux états
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        // l'état isLoading passe à true au début du chargement des données
        setIsLoading(true);

        const response = await fetch(
          "/eco2mix-metropoles-2025-janvier-01.json"
        );
        const datas = await response.json();

        // Si tout s'est bien passé ; nous chargeons les données dans l'état metropolisesDatas

        setMetropolisesDatas(datas);
      } catch (err) {
        // Si une erreur apparaît ; l'état error stocke le message d'erreur
        setError(err.message);
      } finally {
        // Dans tous les cas ; l'état isLoading repasse à la fin à faux
        setIsLoading(false);
      }
    };

    fetchDatas();
  }, []);

  return (
    <>
      <header>
        <DashboardHeader />

        <InfoPanel totalCities={15} avgConsumption={950} period="24h" />
      </header>

      <main className="dashboard-main">
        {Object.keys(metropolisesDatas).length !== 0 && (
          <>
            <MetropolisCard
              libelle_metropole={Object.keys(metropolisesDatas)[0]}
              consommation={
                metropolisesDatas[Object.keys(metropolisesDatas)[0]].datas[
                  "2025-01-01"
                ]["12:00"].consommation
              }
              echanges_physiques={
                metropolisesDatas[Object.keys(metropolisesDatas)[0]].datas[
                  "2025-01-01"
                ]["12:00"].echanges_physiques
              }
              production={
                metropolisesDatas[Object.keys(metropolisesDatas)[0]].datas[
                  "2025-01-01"
                ]["12:00"].production
              }
            />
            <MetropolisCard
              libelle_metropole={Object.keys(metropolisesDatas)[1]}
              consommation={
                metropolisesDatas[Object.keys(metropolisesDatas)[1]].datas[
                  "2025-01-01"
                ]["12:00"].consommation
              }
              echanges_physiques={
                metropolisesDatas[Object.keys(metropolisesDatas)[1]].datas[
                  "2025-01-01"
                ]["12:00"].echanges_physiques
              }
              production={
                metropolisesDatas[Object.keys(metropolisesDatas)[1]].datas[
                  "2025-01-01"
                ]["12:00"].production
              }
            />
            <MetropolisCard
              libelle_metropole={Object.keys(metropolisesDatas)[2]}
              consommation={
                metropolisesDatas[Object.keys(metropolisesDatas)[2]].datas[
                  "2025-01-01"
                ]["12:00"].consommation
              }
              echanges_physiques={
                metropolisesDatas[Object.keys(metropolisesDatas)[2]].datas[
                  "2025-01-01"
                ]["12:00"].echanges_physiques
              }
              production={
                metropolisesDatas[Object.keys(metropolisesDatas)[2]].datas[
                  "2025-01-01"
                ]["12:00"].production
              }
            />
          </>
        )}
        {isLoading === true && (
          <p>Données en cours de chargement... veuillez patienter</p>
        )}
        {/* Ajout de l’affichage du message d’erreur si il y en a eu une */}
        {error !== null && <p>{error}</p>}
      </main>
    </>
  );
}
