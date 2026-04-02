import React from 'react'
import profil from '../assets/images/IMG_2064.JPG'
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero'>
         <div className="box_hero">
             {/* gauche */}
             <div className="hero_gauche">
                <h1>Je suis Developpeur </h1>
                 <h2>Front-End</h2>
                 <p>
                    Je transforme des idées complexes en interfaces élégantes, rapides et mémorables. Du code au pixel, du montage à l'écran — j'assure.
                 </p>
                <div className="hero_btn">
                     <button className='hero_btn1'>
                        Voir mes projets
                        <FaLongArrowAltRight />
                     </button>
                     <button className='hero_btn2'>Me contacter</button>
                </div>

             </div>
             {/* droite */}
             <div className="hero_droite">
                  <img src={profil} alt="" srcset="" />
             </div>
         </div>
    </div>
  )
}

export default Hero
