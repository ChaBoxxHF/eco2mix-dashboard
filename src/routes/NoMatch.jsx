import { useLocation, Link } from 'react-router-dom'

export default function NoMatch() {
  let location = useLocation()

  return (
    <div>
      <h1>Page introuvable</h1>

      <Link to="/" title="Revenir sur la page principale">
        Retour sur la page d&apos;accueil
      </Link>

      <br />

      <code>Page : {location.pathname}</code>
    </div>
  )
}
