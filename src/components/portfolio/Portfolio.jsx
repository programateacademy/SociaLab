import React from 'react';
import './Portfolio.css';

import ODS1 from '../../assets/ODS1.png';
import ODS2 from '../../assets/ODS2.png';
import ODS3 from '../../assets/ODS3.png';

const Portfolio = () => {
  const images = {
    ODS1: ODS1.default,
    ODS2: ODS2.default,
    ODS3: ODS3.default,
  };

  const imageNames = ['ODS1', 'ODS2', 'ODS3'];

  return (
    <div className="container">
      <h1>PORTAFOLIO</h1>
      <p>
        Te invitamos a explorar nuestro portafolio completo, donde hemos recopilado cuidadosamente el contenido que creemos será de tu interés. Descubre la variedad y calidad de nuestras propuestas a medida que navegas por las siguientes páginas.
      </p>
      <div className="portfolio">
        {imageNames.map((imageName, index) => (
          <div key={index} className="project">
            <img src={images[imageName]} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
      <div>
        <img src={ODS1} alt="ODS1" />
        <img src={ODS2} alt="ODS1" />
      </div>
    </div>
  );
};

export default Portfolio;
