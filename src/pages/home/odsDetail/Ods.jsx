import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../../../data/data';
import './Ods.scss';

const Ods = () => {
  const { id } = useParams();

  const selectedProject = projectData.find((project) => project.id === parseInt(id, 10));

  return (
    <div className="project-container">
      {selectedProject ? (
        <>
          <h1>{selectedProject.name}</h1>
          <p>{selectedProject.summary}</p>
          <p>Lugar de impacto: {selectedProject.impactLocation}</p>
          <div className="project-images">
            {selectedProject.image.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc} 
                alt={`Project ${selectedProject.id} Image ${index}`}
                className="project-image"
              />
            ))}
          </div>
        </>
      ) : (
        <p className="not-found">Proyecto no encontrado</p>
      )}
    </div>
  );
};

export default Ods;
