import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const currentPath = useLocation.pathname;
  return (
    <>
      <div>
        <header>
          <nav>
            <h1>eco2mix-dashboard</h1>
            <ul>
              <li>
                <Link to="/" className={currentPath === "/" ? "active" : ""}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/metropolises"
                  className={currentPath === "/" ? "active" : ""}>
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
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer></footer>
      </div>
    </>
  );
}

export default Layout;
