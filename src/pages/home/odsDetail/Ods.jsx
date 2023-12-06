import React from 'react';
import { useParams } from 'react-router-dom';
import { projectData, projectsBySDG } from '../../../data/data';
import { odsData } from '../../../data/odsData';
import { odsImageData } from '../../../data/odsImageData';
import './Ods.scss';


const Ods = () => {
  const { id } = useParams();

  const selectedOds = odsData.find((ods) => ods.id === parseInt(id));
  const projectIds = projectsBySDG[`ODS ${id}`] || [];
  const selectedProjects = projectData.filter((project) => projectIds.includes(project.id));

  const imageSrc = odsImageData[selectedOds?.number];

  return (
    <div className="ods-container">
      {selectedOds ? (
        <>
          <h1>{selectedOds.name}</h1>
          {imageSrc && <img src={imageSrc} alt={`ODS ${id}`} />}
          <div>
            {selectedProjects.map((project) => (
              <div key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <p>Lugar de impacto: {project.impactLocation}</p>
                <div className="ods-images">
                  {project.sustainableDevelopmentGoals.map((ods) => (
                    <img
                      key={ods}
                      src={odsImageData[ods]}
                      alt={`ODS ${ods}`}
                      title={`ODS ${ods}`}
                      className="ods-icon"
                    />
                  ))}
                </div>
              </div>
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
