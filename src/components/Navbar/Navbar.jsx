import { NavLink } from "react-router-dom";
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
          <NavLink to={"/"}>Produkterr</NavLink>
        </li>
        <h2>Bageriet</h2>
        <li>
          <NavLink to={"/"}>Kontakt</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
