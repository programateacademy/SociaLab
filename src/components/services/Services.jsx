import React from "react";
import "./Services.css";
import Creacion from "../../assets/img/creación.svg";
import Automatizacion from "../../assets/img/automatización.svg";
import Mejoras from "../../assets/img/mejoras.svg";

const Services = () => {
  return (
    <>
      <div id="services" className="services">
        <h2 className="tituloo">NUESTROS SERVICIOS</h2>
        <div className="containerservices">
          <div className="servicios">
            <h2 className="servicio">CREACIÓN DE LANDING PAGE</h2>
            <img className="imgservices" src={Creacion} alt="Creación de landing page" />
          </div>
          <div className="servicios">
            <h2 className="servicio">AUTOMATIZACIÓN DE PROCESOS</h2>
            <img className="imgservices" src={Automatizacion} alt="Creación de landing page" />
          </div>
          <div className="servicios">
            <h2 className="servicio">MEJORAS DE PLATAFORMA</h2>
            <img className="imgservices" src={Mejoras} alt="Creación de landing page" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
