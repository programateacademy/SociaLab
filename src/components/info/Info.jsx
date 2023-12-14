import info from "../../assets/img/info.png";
<<<<<<< HEAD
import "./Info.css";

const Info = () => {
  return ( 
    <div>
      <h1 className="nosotros">SOBRE NOSOTROS</h1>
      <div className="grid">
        <div className="info-container">
          <p>Bienvenido a Social Lab: Impulsando el Cambio a través de la Tecnología</p>
          <h2 className="obj">OBJETIVO ESTRATEGICO</h2>
          <p>
            Nos enorgullece facilitar el acceso tecnológico a organizaciones sin fines de lucro y fundaciones;
            contribuyendo a la automatización, creación de páginas web y mejora de plataformas.
            Nuestro propósito es apoyar iniciativas alineadas con los Objetivos de Desarrollo Sostenible (ODS).
          </p>
        </div>
        <div className="image-container">
          <img className="info-image" src={info} alt="imagen representativa de informacion" />
        </div>
=======
import Home from "../../assets/img/Home.png";
import Homme from "../../assets/img/Homme.png";

import "./Info.css";

const Info = () => {
  return (
    <div className="grid">
      <div className="info-container">
        <h1>Bienvenido a Social Lab: Impulsando el Cambio a través de la Tecnología</h1>
        <h2>OBJETIVO ESTRATEGICO</h2>
        <p>
          Nos enorgullece facilitar el acceso tecnológico a organizaciones sin fines de lucro y fundaciones;
          contribuyendo a la automatización, creación de páginas web y mejora de plataformas.
          Nuestro propósito es apoyar iniciativas alineadas con los Objetivos de Desarrollo Sostenible (ODS).
        </p>
      </div>
      <div className="image-container">
        <img className="info-image"  src={info} alt="imagen representativa de informacion"/>
>>>>>>> 7bef75f1758c097ec9d51c11e83493df07798939
      </div>
    </div>
  );
};

export default Info;
