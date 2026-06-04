import '/src/assets/css/nav.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        Inicio
      </NavLink>

      <NavLink to="/proyectos">
        Proyectos
      </NavLink>

      <NavLink to="/perfil">
        Perfil
      </NavLink>
    </nav>
  );
}

export default Nav;