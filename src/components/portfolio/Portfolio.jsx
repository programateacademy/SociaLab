import React from 'react';
import { Link } from 'react-router-dom';
import { odsData } from '../../data/odsData';
import { projectsBySDG } from '../../data/data';
import './Portfolio.css';

const Portfolio = () => {
  const odsCards = odsData.map((ods) => {
    const { id, image } = ods;
    const associatedProjects = projectsBySDG[`ODS ${id}`] || [];
    const linkEnabled = associatedProjects.length > 0;

    return (
      <Link to={linkEnabled ? `/ruta/${id}` : '/ruta'} key={id} className={`ods-card ${linkEnabled ? '' : 'disabled'}`} onClick={linkEnabled ? null : (e) => e.preventDefault()}>
        <img src={image} alt={`ODS ${id}`} />
      </Link>
    );
  });

  return (
    <>
      <h1>PORTAFOLIO</h1>
      <p>
        Te invitamos a explorar nuestro portafolio completo, donde hemos recopilado cuidadosamente el contenido que creemos será de tu interés. Descubre la variedad y calidad de nuestras propuestas a medida que navegas por las siguientes páginas.
      </p>
      <div className="portfolio">{odsCards}</div>
    </>
  );
};

export default Portfolio;
