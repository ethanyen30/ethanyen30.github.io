import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./ProjectCard.css";

export default function ProjectCard({ title, description, image, link }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={title} className="project-image" />
          <h3>{title}</h3>
        </div>
        <div className="flip-card-back">
          <ReactMarkdown>{description}</ReactMarkdown>
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
