import React from 'react'
import { NavLink } from 'react-router-dom'

const projets_bd = [
  {
    id: 1,
    nom: "Portfolio Personnel",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
    techno: ["React", "CSS"],
    description: "Mon portfolio développé avec React"
  },
  {
    id: 2,
    nom: "Site E-commerce",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    techno: ["HTML", "CSS", "JavaScript"],
    description: "Site de vente en ligne"
  },
  {
    id: 3,
    nom: "Application Laravel",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    techno: ["Laravel", "PHP", "CSS"],
    description: "Application web avec Laravel"
  },
  {
    id: 4,
    nom: "Dashboard Admin",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    techno: ["React", "JavaScript"],
    description: "Tableau de bord administrateur"
  },
    {
    id: 5,
    nom: "Dashboard Admin",
    image: "https://images.unsplash.com/photo-1557441327-782eea23facd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2UlMjBkZXZlbG9wcGV1ciUyMHVuc3BsYXNofGVufDB8fDB8fHww",
    techno: ["React", "JavaScript"],
    description: "Tableau de bord administrateur"
    },
      {
    id: 6,
    nom: "Dashboard Admin",
    image: "https://images.unsplash.com/photo-1704717700477-69f9509f9af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlJTIwaW5mb3JtYXRpcXVlfGVufDB8fDB8fHww",
    techno: ["React", "JavaScript"],
    description: "Tableau de bord administrateur"
      },
]

const Projets = () => {
  return (
    <div className='projets'>
      <h1>Mes Projets</h1>
      <div className="mes_projets">
        {projets_bd.map((projet) => (
          <NavLink to={`/projet/${projet.id}`} key={projet.id} className="un_projet">
            <img src={projet.image} alt={projet.nom} />
            <div className="projet_info">
              <h2>{projet.nom}</h2>
              <p>{projet.description}</p>
              <div className="technos">
                {projet.techno.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Projets