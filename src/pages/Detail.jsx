import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

const projets_bd = [
  {
    id: 1,
    nom: "Portfolio Personnel",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop",
    techno: ["React", "CSS"],
    description: "Mon portfolio développé avec React. Un site moderne qui présente mes compétences et mes projets de développement Front-End.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    nom: "Site E-commerce",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    techno: ["HTML", "CSS", "JavaScript"],
    description: "Site de vente en ligne avec panier d'achat, gestion des produits et système de paiement intégré.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 3,
    nom: "Application Laravel",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    techno: ["Laravel", "PHP", "CSS"],
    description: "Application web complète avec authentification, gestion des utilisateurs et base de données MySQL.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 4,
    nom: "Dashboard Admin",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    techno: ["React", "JavaScript"],
    description: "Tableau de bord administrateur avec graphiques, statistiques et gestion des données en temps réel.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  "https://images.unsplash.com/photo-1704717700477-69f9509f9af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlJTIwaW5mb3JtYXRpcXVlfGVufDB8fDB8fHww",
  {
    id: 6,
    nom: "Dashboard Admin",
    image: "https://images.unsplash.com/photo-1704717700477-69f9509f9af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlJTIwaW5mb3JtYXRpcXVlfGVufDB8fDB8fHww",
    techno: ["React", "JavaScript"],
    description: "Tableau de bord administrateur avec graphiques, statistiques et gestion des données en temps réel.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 5,
    nom: "Dashboard Admin",
    image: "https://images.unsplash.com/photo-1557441327-782eea23facd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2UlMjBkZXZlbG9wcGV1ciUyMHVuc3BsYXNofGVufDB8fDB8fHww",
    techno: ["React", "JavaScript"],
    description: "Tableau de bord administrateur avec graphiques, statistiques et gestion des données en temps réel.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
{
    id: 6,
    nom: "Dashboard Admin",
    image: "https://images.unsplash.com/photo-1704717700477-69f9509f9af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlJTIwaW5mb3JtYXRpcXVlfGVufDB8fDB8fHww",
    techno: ["React", "JavaScript"],
    description: "Tableau de bord administrateur avec graphiques, statistiques et gestion des données en temps réel.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  { 
    id: 5,
    nom: "Dashboard Admin",
    image: "https://images.unsplash.com/photo-1704717700477-69f9509f9af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlJTIwaW5mb3JtYXRpcXVlfGVufDB8fDB8fHww",
    techno: ["React", "JavaScript"],
    description: "Tableau de bord administrateur avec graphiques, statistiques et gestion des données en temps réel.",
    github: "https://github.com",
    demo: "https://demo.com"
  },

]

const Detail = () => {
  const { id } = useParams()
  const projet = projets_bd.find(p => p.id === parseInt(id))

  if (!projet) {
    return (
      <div className='detail' style={{ textAlign: "center" }}>
        <h2>Projet introuvable</h2>
        <NavLink to="/projets" style={{ color: "#3b82f6" }}>← Retour aux projets</NavLink>
      </div>
    )
  }

  return (
    <div className='detail'>
      <h1 className='title'>{projet.nom}</h1>

      <div className="box_detail">

        {/* Image */}
        <div className="image_container">
          <img src={projet.image} alt={projet.nom} />
        </div>

        {/* Infos */}
        <div className="info_container">
          <h2>{projet.nom}</h2>
          <p className='desc'>{projet.description}</p>

          <div className="links">
            <a href={projet.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={projet.demo} target="_blank" rel="noreferrer">Demo Live</a>
          </div>

          <div className="techno">
            <div className="technos">
              {projet.techno.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <NavLink to="/projets" style={{ color: "#3b82f6", fontSize: "15px" }}>
              ← Retour aux projets
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Detail
