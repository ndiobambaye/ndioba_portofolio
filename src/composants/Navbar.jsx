import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { IoMenu } from "react-icons/io5";


const Navbar = () => {

  const [ openMenu , setOpenMenu ] = useState(false)
  console.log(openMenu)
   

  return (
    <nav> 
        {/* gauche */}
     <div className="logo"><span>{"</>"}</span> Ndioba.dev</div>

        {/* au milieu */}

        <div className="lien">
              <NavLink to="/">
                <p>Accueil</p>
              </NavLink>
              <NavLink to="/projets">
               <p>Projets</p>
              </NavLink>
              <NavLink to="/contact" >
               <p>Contact</p>
              </NavLink>
        </div>

        {/* droite */}
         <div className="menu">
            <div className="about">About</div>
            <IoMenu 
             onClick={() => setOpenMenu(!openMenu)}
            className='burguer'  size={30} />
         </div>

         {/* volet  */}

          {
            openMenu && (
            <div className="lien_mobile">
              <NavLink to="/">
                <p>Accueil</p>
              </NavLink>
              <NavLink to="/projets">
               <p>Projets</p>
              </NavLink>
              <NavLink to="/contact" >
               <p>Contact</p>
              </NavLink>
           </div>
            )
          }



    </nav>
  )
}

export default Navbar
