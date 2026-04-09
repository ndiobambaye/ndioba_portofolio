import React from 'react'
import { NavLink } from 'react-router-dom'

const projets_bd = [
  {
    id: 1,
    nom: "Portfolio Personnel",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
    techno: ["React", "CSS", "React Router DOM"],
    description: "Mon portfolio développé avec React JS"
  },
  {
    id: 2,
    nom: "MarchéLocal",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    techno: ["React", "CSS"],
    description: "Plateforme d'annonces locales"
  },
  {
    id: 3,
    nom: "RED PRODUCT",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    techno: ["Laravel", "PHP", "CSS"],
    description: "Tableau de bord de gestion hôtelière"
  },
  {
    id: 4,
    nom: "Boutique en ligne",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=250&fit=crop",
    techno: ["React", "CSS"],
    description: "Boutique de produits alimentaires"
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