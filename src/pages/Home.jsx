import { useSelector } from "react-redux";

function Home() {
  const language = useSelector((state) => state.language);

  return <>{language === "fr" ? "Page d'accueil" : "Home page"}</>;
}

export default Home;
