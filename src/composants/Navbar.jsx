import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav> 
      {/* gauche */}
      <div className="logo"><span>{"</>"}</span> Ndioba.dev</div>

      {/* milieu - visible sur desktop seulement */}
      <div className="lien">
        <NavLink to="/"><p>Accueil</p></NavLink>
        <NavLink to="/projets"><p>Projets</p></NavLink>
        <NavLink to="/contact"><p>Contact</p></NavLink>
        <NavLink to="/about"><p>About</p></NavLink>
      </div>

      {/* burger - visible sur mobile seulement */}
      <div className="burger_btn" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <IoClose size={30} color="white" /> : <IoMenu size={30} color="white" />}
      </div>

      {/* volet mobile */}
      {openMenu && (
        <div className="lien_mobile">
          <NavLink to="/" onClick={() => setOpenMenu(false)}><p>Accueil</p></NavLink>
          <NavLink to="/projets" onClick={() => setOpenMenu(false)}><p>Projets</p></NavLink>
          <NavLink to="/contact" onClick={() => setOpenMenu(false)}><p>Contact</p></NavLink>
          <NavLink to="/about" onClick={() => setOpenMenu(false)}><p>About</p></NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar