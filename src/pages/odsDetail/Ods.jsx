import React from "react";
import "./Ods.css";
import { useParams } from "react-router-dom";
import { projectData } from "../../data/data";

import ODSCOLOR1 from "../../assets/ODSCOLOR1.png";
import ODSCOLOR2 from "../../assets/ODSCOLOR2.png";
import ODSCOLOR3 from "../../assets/ODSCOLOR3.png";
import ODSCOLOR4 from "../../assets/ODSCOLOR4.png";
import ODSCOLOR5 from "../../assets/ODSCOLOR5.png";
import ODSCOLOR6 from "../../assets/ODSCOLOR6.png";
import ODSCOLOR7 from "../../assets/ODSCOLOR7.png";
import ODSCOLOR8 from "../../assets/ODSCOLOR8.png";
import ODSCOLOR9 from "../../assets/ODSCOLOR9.png";
import ODSCOLOR10 from "../../assets/ODSCOLOR10.png";
import ODSCOLOR11 from "../../assets/ODSCOLOR11.png";
import ODSCOLOR12 from "../../assets/ODSCOLOR12.png";
import ODSCOLOR13 from "../../assets/ODSCOLOR13.png";
import ODSCOLOR14 from "../../assets/ODSCOLOR14.png";
import ODSCOLOR15 from "../../assets/ODSCOLOR15.png";
import ODSCOLOR16 from "../../assets/ODSCOLOR16.png";
import ODSCOLOR17 from "../../assets/ODSCOLOR17.png";

const ODSDescriptions = {
  "ODS 1": { name: "Fin de la pobreza", image: ODSCOLOR1 },
  "ODS 2": { name: "Hambre cero", image: ODSCOLOR2 },
  "ODS 3": { name: "Salud y Bienestar", image: ODSCOLOR3 },
  "ODS 4": { name: "Educación de calidad", image: ODSCOLOR4 },
  "ODS 5": { name: "igualdad de género", image: ODSCOLOR5 },
  "ODS 6": { name: "Agua limpia y saneamiento", image: ODSCOLOR6 },
  "ODS 7": { name: "Energia accequible y no contaminante", image: ODSCOLOR7 },
  "ODS 8": { name: "Trabajo decente y crecimiento economico", image: ODSCOLOR8 },
  "ODS 9": { name: "Industria, innovación e infraestructura", image: ODSCOLOR9 },
  "ODS 10": { name: "Reducción de las desigualdades", image: ODSCOLOR10 },
  "ODS 11": { name: "Ciudades y comunidades sostenibles", image: ODSCOLOR11 },
  "ODS 12": { name: "Producción y consumos responsables", image: ODSCOLOR12 },
  "ODS 13": { name: "Acción por el clima", image: ODSCOLOR13 },
  "ODS 14": { name: "Vida submarina", image: ODSCOLOR14 },
  "ODS 15": { name: "vida de ecosistemas terrestres", image: ODSCOLOR15 },
  "ODS 16": { name: "paz, justicia e instituciones sólidas", image: ODSCOLOR16 },
  "ODS 17": { name: "Alianzas para lograr los objetivos", image: ODSCOLOR17 },
};

function Ods() {
  const { id } = useParams();

  // Mapear el número de ID a su ODS correspondiente
  const odsGoals = {
    1: "ODS 1",
    2: "ODS 2",
    3: "ODS 3",
    4: "ODS 4",
    5: "ODS 5",
    6: "ODS 6",
    7: "ODS 7",
    8: "ODS 8",
    9: "ODS 9",
    10: "ODS 10",
    11: "ODS 11",
    12: "ODS 12",
    13: "ODS 13",
    14: "ODS 14",
    15: "ODS 15",
    16: "ODS 16",
    17: "ODS 17",
  };

  const odsGoal = odsGoals[id];

  if (!odsGoal) {
    return <div>Objetivo de Desarrollo Sostenible no encontrado</div>;
  }

  const currentODS = ODSDescriptions[odsGoal];

  if (!currentODS) {
    return <div>Información del ODS no encontrada</div>;
  }

  const filteredProjects = projectData.filter(
    (project) =>
      project.sustainableDevelopmentGoals &&
      project.sustainableDevelopmentGoals.includes(odsGoal)
  );

  return (
    <div className="container">
      <div className="ods">
        <img  src={currentODS.image} alt={currentODS.name} />
        <h1>{currentODS.name}</h1>
      </div>
      {filteredProjects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
          <h3 className="impact">Impacto</h3>
          <p className="impacto">{project.impactLocation}</p>
          <div className="image-container">
            <h3>Colaboración con otras ODS</h3>
            <div className="icon-cards">
              <div className="icon-cards__content">
                <div className="icon-cards__item">
              {project.image.map((img, index) => (
                <img key={index} src={img} alt={`Image ${index + 1}`} />
              ))}
            </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ods;
