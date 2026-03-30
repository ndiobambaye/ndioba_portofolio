import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaLaravel, FaPhp } from 'react-icons/fa'

const Competences = () => {
  const skills = [
    { id: 1, titre: "HTML", icone: <FaHtml5 size={60} color="#e34c26" /> },
    { id: 2, titre: "CSS", icone: <FaCss3Alt size={60} color="#264de4" /> },
    { id: 3, titre: "JavaScript", icone: <FaJs size={60} color="#f7df1e" /> },
    { id: 4, titre: "React JS", icone: <FaReact size={60} color="#61dafb" /> },
    { id: 5, titre: "Laravel", icone: <FaLaravel size={60} color="#ff2d20" /> },
    { id: 6, titre: "PHP", icone: <FaPhp size={60} color="#777bb4" /> },
  ]

  return (
    <div className='competences'>
      <h1>COMPÉTENCES</h1>
      <div className="mes_competences">
        {skills.map((skill) => (
          <div key={skill.id} className="un_competence">
            {skill.icone}
            <p>{skill.titre}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Competences
