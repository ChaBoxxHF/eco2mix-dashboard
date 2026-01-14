import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";
import { setLanguage } from "../utils/languageSlice";
import { useDispatch, useSelector } from "react-redux";

function Layout({ children }) {
  const { pathname: currentPath } = useLocation();
  const [theme, setTheme] = useState("sombre");

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const handleClickTheme = () => {
    console.log("Changement de thème");
    setTheme(theme === "sombre" ? "clair" : "sombre");
  };

  const handleLangChange = (e) => {
    const langChoosen = e.target.value;
    dispatch(setLanguage(langChoosen));
  };

  return (
    <>
      <div>
        <header>
          <nav>
            <h1>eco2mix-dashboard</h1>
            <ul id="navbar">
              <li>
                <Link to="/" className={currentPath === "/" ? "active" : ""}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/metropolises"
                  className={currentPath === "/metropolises" ? "active" : ""}>
                  Métropoles
                </Link>
              </li>
              <li>
                <Link
                  to="/infos-panel"
                  className={currentPath === "/infos-panel" ? "active" : ""}>
                  Infos Panel (dashboard)
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={currentPath === "/about" ? "active" : ""}>
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={currentPath === "/contact" ? "active" : ""}>
                  Contact
                </Link>
              </li>
              <li>
                <button onClick={handleClickTheme}>ChangerTheme</button>
              </li>
              <li>
                <select onChange={handleLangChange}>
                  <option value="fr">Français 🇫🇷</option>
                  <option value="en">English 🇬🇧</option>
                </select>
              </li>
            </ul>
          </nav>
        </header>

        <main className={`theme${theme}`}>{children}</main>

        <footer></footer>
      </div>
    </>
  );
}

export default Layout;
