import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1 style={{ fontSize: '80px', color: '#d4a017' }}>404</h1>
      <h2>Page introuvable</h2>
      <NavLink to="/">
        <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Retour à l'accueil
        </button>
      </NavLink>
    </div>
  )
}

export default NotFound