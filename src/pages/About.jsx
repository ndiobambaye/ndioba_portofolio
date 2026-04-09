import React, { useState } from "react";
import "./About.css";

const About = () => {
  const cards = [
    {
      id: 1,
      icon: "💻",
      titre: "Compétences",
      content: (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginTop: "12px" }}>
          {["HTML", "CSS", "JavaScript", "React JS", "Laravel"].map(skill => (
            <span key={skill} style={badgeStyle}>{skill}</span>
          ))}
        </div>
      )
    },
    {
      id: 2,
      icon: "🎯",
      titre: "Mon objectif",
      content: (
        <p style={{ marginTop: "10px", fontSize: "0.9rem", lineHeight: "1.6", color: "rgba(255,255,255,0.7)" }}>
          Développer mes compétences chaque jour, approfondir mes connaissances 
          en développement web et contribuer à des projets concrets et impactants.
        </p>
      )
    },
    {
      id: 3,
      icon: "✨",
      titre: "Mes qualités",
      content: (
        <ul style={{ textAlign: "left", marginTop: "10px", lineHeight: "2", color: "rgba(255,255,255,0.7)", paddingLeft: "16px" }}>
          <li>Sérieuse & motivée</li>
          <li>Curieuse</li>
          <li>Travail en équipe</li>
          <li>Autonome</li>
        </ul>
      )
    },
    {
      id: 4,
      icon: "🚀",
      titre: "Mes projets",
      content: (
        <ul style={{ textAlign: "left", marginTop: "10px", lineHeight: "2", color: "rgba(255,255,255,0.7)", paddingLeft: "16px" }}>
          <li>Portfolio personnel</li>
          <li>Applications React</li>
          <li>Projets scolaires</li>
        </ul>
      )
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div className="about_page">
      <h1 className="about_titre">À propos de moi</h1>

      <p className="about_desc">
        Bonjour ! Je m'appelle <strong style={{color:"white"}}>Ndioba Mbaye</strong>, étudiante en informatique 
        passionnée par le développement Front-End. J'aime transformer des idées complexes 
        en interfaces élégantes, rapides et mémorables. Du code au pixel — j'assure !
      </p>

      <div className="about_grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="about_card"
            style={{ animationDelay: `${index * 0.2}s` }}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 className="about_card_titre">
              {card.icon} {card.titre}
            </h3>
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
};

const badgeStyle = {
  background: "rgba(167, 139, 250, 0.15)",
  color: "#a78bfa",
  padding: "4px 12px",
  borderRadius: "20px",
  fontSize: "0.82rem",
  border: "1px solid rgba(167, 139, 250, 0.3)"
};

export default About;
