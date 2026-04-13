import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">
          Projects
        </NavLink>
        <NavLink to="/hobbies">
          Hobbies
        </NavLink>
      </div>
    </nav>
  );
}
