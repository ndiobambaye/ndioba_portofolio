import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero_texte">
        <h1>Je suis <span>Ndioba</span></h1>
        <h2>Développeur Front-End</h2>
        <p>Je transforme des idées complexes en interfaces élégantes, rapides et mémorables.</p>
        <div className="hero_btn">
          <button className='btn_primary'>Voir mes projets <FaArrowRight /></button>
          <button className='btn_secondary'>Me contacter</button>
        </div>
      </div>
    </div>
  )
}
