import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import LogoFlowBite from "../assets/logo-flowbite.svg";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-zinc-700 flex justify-between py-2 px-4 rounded-lg items-center flex-col sm:flex-row gap-4">
      <h1 className="text-2xl font-bold">
        <Link className="flex gap-2" to={isAuthenticated ? "/posts" : "/"}>
          <span>
            <img
              className="animate-spin"
              src={LogoFlowBite}
              alt="Logo principal de la aplicación"
            />
          </span>
          <span>FlowBite</span>
        </Link>
      </h1>
      <ul className="flex gap-x-4 flex-col items-center sm:flex-row gap-4">
        {isAuthenticated ? (
          <>
            <li>Welcome {user.username}</li>

            <li>
              <ButtonLink to="/add-post">Publicar</ButtonLink>
            </li>

            <li>
              <ButtonLink to="/Btrabajo">Bolsa de trabajo</ButtonLink>
            </li>

            <li>
              <ButtonLink to="/Productos">Productos</ButtonLink>
            </li>

            <li>
              <Link to="/" onClick={() => logout()}>
                Salir
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Iniciar sesión</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Registrate</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
