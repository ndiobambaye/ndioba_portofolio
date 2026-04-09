import React from 'react'
import profil from '../assets/images/IMG_2064.JPG'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="box_hero">
        <div className="hero_gauche">
         <h1>Je suis <span>Developpeur</span></h1>
    
          <h2>Front-End</h2>
          <p>Je transforme des idées complexes en interfaces élégantes, rapides et mémorables. Du code au pixel — j'assure.</p>
          <div className="hero_btn">
            <NavLink to="/projets">
              <button className='hero_btn1'>Voir mes projets <FaLongArrowAltRight /></button>
            </NavLink>
            <NavLink to="/contact">
              <button className='hero_btn2'>Me contacter</button>
            </NavLink>
          </div>
        </div>
        <div className="hero_droite">
          <img src={profil} alt="Ndioba Mbaye" />
        </div>
      </div>
    </div>
  )
}

export default Hero