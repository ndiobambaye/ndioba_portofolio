import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Nogaye Yacine Sarr</h2>

      <ul className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projets">projets</Link>
      </ul>
    </nav>
  );
  
}

export default Navbar;