import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaLaravel } from "react-icons/fa";

const Competences = () => {

  const skills = [
    { id: 1, titre: "HTML", icone: <FaHtml5 size={50} color="#e34c26" /> },
    { id: 2, titre: "CSS", icone: <FaCss3Alt size={50} color="#264de4" /> },
    { id: 3, titre: "React JS", icone: <FaReact size={50} color="#61dafb" /> },
    { id: 4, titre: "Javascript", icone: <FaJs size={50} color="#f7df1e" /> },
    { id: 5, titre: "Laravel", icone: <FaLaravel size={50} color="#ff2d20" /> },
  ]

  return (
    <div className='competences'>
      <h1>COMPÉTENCES</h1>
      <div className="mes_competences">
        {skills.map((skill) => (
          <div key={skill.id} className="un_competence">
            {skill.icone}
            <h1>{skill.titre}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Competences