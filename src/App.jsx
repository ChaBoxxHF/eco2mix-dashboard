import InfosPanel from "./components/InfosPanel/InfoPanel";
import MetropolisCard from "./components/MetropolisCard/MetropolisCard";

function App() {
  return (
    <>
      <InfosPanel /*totalCities={15}*/ avgConsommation={2222} period={"test"} />
      <MetropolisCard />
    </>
  );
}

export default App;
