import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { projectData, projectsBySDG } from "../../data/data";

import ODS1 from "../../assets/ODS1.png";
import ODS2 from "../../assets/ODS2.png";
import ODS3 from "../../assets/ODS3.png";
import ODS4 from "../../assets/ODS4.png";
import ODS5 from "../../assets/ODS5.png";
import ODS6 from "../../assets/ODS6.png";
import ODS7 from "../../assets/ODS7.png";
import ODS8 from "../../assets/ODS8.png";
import ODS9 from "../../assets/ODS9.png";
import ODS10 from "../../assets/ODS10.png";
import ODS11 from "../../assets/ODS11.png";
import ODS12 from "../../assets/ODS12.png";
import ODS13 from "../../assets/ODS13.png";
import ODS14 from "../../assets/ODS14.png";
import ODS15 from "../../assets/ODS15.png";
import ODS16 from "../../assets/ODS16.png";
import ODS17 from "../../assets/ODS17.png";

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


const Portfolio = () => {
  const [projectCount, setProjectCount] = useState({});
  const [hoveredProjects, setHoveredProjects] = useState({});

  const imagesWithHover = [
    { image: ODS1, goal: "ODS 1", hoverImage: ODSCOLOR1},
    { image: ODS2, goal: "ODS 2" , hoverImage: ODSCOLOR2},
    { image: ODS3, goal: "ODS 3" , hoverImage: ODSCOLOR3},
    { image: ODS4, goal: "ODS 4" , hoverImage: ODSCOLOR4},
    { image: ODS5, goal: "ODS 5" , hoverImage: ODSCOLOR5},
    { image: ODS6, goal: "ODS 6" , hoverImage: ODSCOLOR6},
    { image: ODS7, goal: "ODS 7" , hoverImage: ODSCOLOR7},
    { image: ODS8, goal: "ODS 8" , hoverImage: ODSCOLOR8},
    { image: ODS9, goal: "ODS 9" , hoverImage: ODSCOLOR9},
    { image: ODS10, goal: "ODS 10" , hoverImage: ODSCOLOR10},
    { image: ODS11, goal: "ODS 11" , hoverImage: ODSCOLOR11},
    { image: ODS12, goal: "ODS 12" , hoverImage: ODSCOLOR12},
    { image: ODS13, goal: "ODS 13" , hoverImage: ODSCOLOR13},
    { image: ODS14, goal: "ODS 14" , hoverImage: ODSCOLOR14},
    { image: ODS15, goal: "ODS 15" , hoverImage: ODSCOLOR15},
    { image: ODS16, goal: "ODS 16" , hoverImage: ODSCOLOR16},
    { image: ODS17, goal: "ODS 17" , hoverImage: ODSCOLOR17},
  ];

  useEffect(() => {
    const countProjects = {};
    imagesWithHover.forEach((item) => {
      const filteredProjects = projectData.filter(
        (project) =>
          project.sustainableDevelopmentGoals &&
          project.sustainableDevelopmentGoals.includes(item.goal)
      );
      countProjects[item.goal] = filteredProjects.length;
    });
    setProjectCount(countProjects);
  }, []);

  const handleHover = (odsGoal) => {
    return ` ${projectCount[odsGoal] || 0}`;
  };

  const handleClick = (odsGoal) => {
    console.log("Objetivo de Desarrollo Sostenible:", odsGoal);
    const projectIds = projectsBySDG[odsGoal];
    console.log("IDs de proyectos:", projectIds);
    if (!projectIds || projectIds.length === 0) {
      console.log("No hay proyectos asociados a este ODS");
      return;
    }
    const filteredProjects = projectData.filter(
      (project) =>
        project.sustainableDevelopmentGoals &&
        project.sustainableDevelopmentGoals.includes(odsGoal)
    );
    console.log("Proyectos filtrados:", filteredProjects);
  };

  return (
    <div className="cont" id="portfolio">
      <h1 className="title">Proyectos</h1>
      <p>Te invitamos a explorar nuestro portafolio completo, donde hemos recopilado cuidadosamente el contenido que creemos será de tu interés. Descubre la variedad y calidad de nuestras propuestas a medida que navegas por las siguientes páginas.</p>
      <div className="container">
        <div className="portfolio">
          {imagesWithHover.map((item, index) => (
            <div key={index} className="portfolio">
              <Link to={projectCount[item.goal] !== 0 ? `/ods/${index + 1}` : "#"}>
                <div
                  className={`ods-card ${
                    projectCount[item.goal] === 0 ? "disabled-card" : ""
                  }`}
                  onMouseEnter={() => setHoveredProjects(item.hoverImage)}
                  onMouseLeave={() => setHoveredProjects(null)}
                  onClick={() => projectCount[item.goal] !== 0 && handleClick(item.goal)}
                >
                  <img
                    className="ods-card"
                    src={hoveredProjects === item.hoverImage ? item.hoverImage : item.image}
                    alt={`Imagen ${index + 1}`}
                  />
                  {hoveredProjects === item.hoverImage && (
                    <div className="project-count">
                    <span>Proyectos</span>
                    {handleHover(item.goal)}
                  </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;