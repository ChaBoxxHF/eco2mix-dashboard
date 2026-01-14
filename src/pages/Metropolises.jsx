import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Metropolises.css";

function Metropolises() {
  const [nomMetropoles, setNomMetropoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/json/eco2mix-metropoles-2025.json");
        const data = await res.json();
        const metropoles = Object.entries(data).map(([nom, info]) => ({
          id: info.code_insee_epci ?? null,
          nom,
        }));
        setNomMetropoles(metropoles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Chargement ...</div>;

  const chargerPage = (idMetropole) => {
    navigate(`/metropolis/${idMetropole}`);
  };

  console.log(nomMetropoles);

  return (
    <>
      <h3>Nom des métropoles</h3>
      <div className="panel">
        {nomMetropoles.map((metropole) => (
          <div key={metropole.id || metropole.nom}>
            <h5>{metropole.nom}</h5>
            <button onClick={() => chargerPage(metropole.id)}>
              Voir Conso
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Metropolises;
