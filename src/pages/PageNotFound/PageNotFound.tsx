import { Link } from "react-router-dom";

const PageNotFound = () => <div>
    <div>La page n'est pas disponible</div>
    <Link to="/">Retourner à la page d'accueil</Link>
</div>

export default PageNotFound;