import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

const projets_bd = [
  {
    id: 1,
    nom: "Portfolio Personnel",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop",
    techno: ["React", "CSS", "React Router DOM", "React Icons"],
    description: "Mon portfolio personnel développé avec React JS.",
    github: "https://github.com/ndiobambaye/ndioba-portofolio",
    demo: "https://ndioba-portofolio-kbjb66gfq-ndiobambayes-projects.vercel.app"
  },
  {
    id: 2,
    nom: "MarchéLocal",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    techno: ["React", "CSS"],
    description: "Plateforme web d'annonces locales.",
    github: "https://github.com/ndiobambaye",
    demo: "#"
  },
  {
    id: 3,
    nom: "RED PRODUCT",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    techno: ["Laravel", "PHP", "HTML5", "CSS3"],
    description: "Application web de gestion hôtelière complète.",
    github: "https://github.com/ndiobambaye",
    demo: "#"
  },
  {
    id: 4,
    nom: "Boutique en ligne",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=500&fit=crop",
    techno: ["React", "CSS"],
    description: "Boutique en ligne de produits alimentaires.",
    github: "https://github.com/ndiobambaye",
    demo: "#"
  },
]



const Detail = () => {
  const { id } = useParams()
  const projet = projets_bd.find(p => p.id === parseInt(id))

  if (!projet) {
    return (
      <div className='detail' style={{ textAlign: "center" }}>
        <h2 style={{ color: "white" }}>Projet introuvable</h2>
        <NavLink to="/projets" style={{ color: "#a78bfa" }}>← Retour aux projets</NavLink>
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
             {projet.demo !== "#" && (
             <a href={projet.demo} target="_blank" rel="noreferrer">Demo Live</a>
              )}
        </div>

          <div className="techno">
            <div className="technos">
              {projet.techno.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <NavLink to="/projets" style={{ color: "#a78bfa", fontSize: "15px" }}>
              ← Retour aux projets
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Detail