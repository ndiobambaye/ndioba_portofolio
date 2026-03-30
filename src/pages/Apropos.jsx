import React from "react"
import { Link } from "react-router-dom"

function Apropos() {
  return (
    <section className="apropos">
      <div className="apropos-container">
        
        <h1>À propos de moi</h1>

        <p className="intro">
          Bonjour ! Je m'appelle <strong>Nogaye Yacine</strong>, développeuse
          débutante en <span>HTML, CSS</span> et <span>JavaScript</span>.  
          Je suis passionnée par la création de sites web modernes,
          simples et efficaces.
        </p>

        <div className="apropos-content">

          {/* Compétences */}
          <div className="card">
            <h2>💻 Compétences</h2>
            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Laravel</span>
              <span>Python</span>
            </div>
          </div>

          {/* Objectif */}
          <div className="card">
            <h2>🎯 Mon objectif</h2>
            <p>
              Mon objectif est de continuer à apprendre, créer des projets
              modernes et devenir une développeuse professionnelle.
              Je veux construire des applications utiles et élégantes.
            </p>
          </div>

          {/* Qualités */}
          <div className="card">
            <h2>✨ Mes qualités</h2>
            <ul className="qualities">
              <li>Sérieuse</li>
              <li>Motivée</li>
              <li>Curieuse</li>
              <li>Travail en équipe</li>
            </ul>
            <p>
              Je suis motivée, curieuse et j’aime apprendre de nouvelles technologies.
            </p>
          </div>

          {/* Projets */}
          <div className="card">
            <h2>🚀 Mes projets</h2>
            <ul className="projects">
              <li>Sites web</li>
              <li>Applications</li>
              <li>Projets scolaires</li>
            </ul>
            
          </div>

        </div>

      

      </div>
    </section>
  );
}

export default Apropos;