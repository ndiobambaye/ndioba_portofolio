import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()

  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1 style={{ color: '#d4a017' }}>Projet #{id}</h1>
      <p style={{ marginTop: '20px', color: '#aaaaaa' }}>Détails du projet bientôt disponibles.</p>
      <NavLink to="/projets">
        <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Retour aux projets
        </button>
      </NavLink>
    </div>
  )
}

export default Detail