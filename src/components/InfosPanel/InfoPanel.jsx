import "./InfosPanel.css";

function InfosPanel() {
  const nbMetropole = "15";
  const consommationMoyen = "950 MW";
  const periodObserv = "24h";

  return (
    <>
      <div>coucou!</div>
      <h3>Indicateurs clés</h3>
      <div className="indicator">
        <div id="ind1">Nombre Metropole = {nbMetropole}</div>
        <div id="ind2">consommationMoyen = {consommationMoyen}</div>
        <div id="ind3">periodObserv = {periodObserv}</div>
      </div>
    </>
  );
}

export default InfosPanel;
