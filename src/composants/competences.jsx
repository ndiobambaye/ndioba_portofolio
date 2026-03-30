import React from 'react'

const Competences = () => {

    const skills = [
        { id:1 , titre : "html" , duree: 3  },
        { id:2 , titre : "css" , duree: 3  },
        { id:3 , titre : "React js" , duree: 2  },
        { id:4 ,titre : "Javascript" , duree: 1  },
        { id:5 ,titre : "laravel" , duree: 1 }
    ]

  return (
    <div className='competences'>
       <h1 >competences</h1>
       <div className="mes_competences">
            
           {
              skills.map((skill) => (
                 <div key={skill.id} className="un_competence">
                     <h1>{skill.titre}</h1>
                 </div>
            ))
           }

       </div>
    </div>
  )
}

export default Competences
