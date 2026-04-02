import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Merci ${formData.nom} ! Votre message a été envoyé.`)
    setFormData({ nom: '', email: '', message: '' })
  }

  return (
    <div className='contact'>
      <h1>CONTACT</h1>
      <div className="contact_box">

        {/* Gauche - Infos */}
        <div className="contact_gauche">
          <h2>Travaillons ensemble !</h2>
          <p>Vous avez un projet ? N'hésitez pas à me contacter.</p>

          <div className="contact_infos">
            <div className="contact_info">
              <FaEnvelope size={20} color="#d4a017" />
              <span>ndioba@email.com</span>
            </div>
            <div className="contact_info">
              <FaPhone size={20} color="#d4a017" />
              <span>+221 77 000 00 00</span>
            </div>
          </div>

          <div className="contact_reseaux">
            <a href="https://github.com" target="_blank" rel="noreferrer">
             <FaGithub size={30} color="#1a1a2e" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} color="#0077b5" />
            </a>
          </div>
        </div>

        {/* Droite - Formulaire */}
        <div className="contact_droite">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label>Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="form_group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
              />
            </div>
            <div className="form_group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                rows="5"
                required
              />
            </div>
            <button type="submit" className="btn_envoyer">
              Envoyer le message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact