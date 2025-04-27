import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link className="navbar-logo" to="/">
        GamesCompare
      </Link>
      <ul className="navbar-links">
        {/* Home Page */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* Comparatore */}
        <li>
          <NavLink to="/comparator">Confronta</NavLink>
        </li>
        {/* Preferiti */}
        <li>
          <NavLink to="/favorites">Preferiti</NavLink>
        </li>
      </ul>
    </nav>
  );
}
