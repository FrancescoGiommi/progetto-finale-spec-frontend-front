import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="/">
        GameCompare 🎮
      </Link>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/comparator">Confronta</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Preferiti</NavLink>
        </li>
      </ul>
    </nav>
  );
}
