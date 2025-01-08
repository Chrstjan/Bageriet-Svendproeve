import { Link, NavLink } from "react-router-dom";
import { Paths } from "../../router/Paths";
import s from "./Navbar.module.scss";

export const Navbar = ({ isHidden }) => {
  return (
    <nav>
      <ul
        className={`${s.navStyling} ${
          isHidden ? s.hiddenStyling : s.navStyling
        }`}
      >
        <li>
          <NavLink to={"/"}>Forside</NavLink>
        </li>
        <li>
          <NavLink to={"/produkter"}>Produkter</NavLink>
        </li>
        <Link to="/">
          <h1>Bageriet</h1>
        </Link>
        <li>
          <NavLink to={"/kontakt"}>Kontakt</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
