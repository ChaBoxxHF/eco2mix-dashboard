import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import NoMatch from "./NoMatch";
import InfosPanelPage from "../pages/InfosPanel";
import About from "../pages/About";
import MetropolisDetail from "../pages/MetropolisDetail";
import Metropolises from "../pages/Metropolises";
import Contact from "../pages/Contact";

function Routeur() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="infos-panel" element={<InfosPanelPage />} />
              <Route path="about" element={<About />} />
              <Route path="/metropolis/:id" element={<MetropolisDetail />} />
              <Route path="/metropolises" element={<Metropolises />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default Routeur;
