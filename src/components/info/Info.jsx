import info from "../../assets/img/info.png";
import Home from "../../assets/img/Home.png";
import Homme from "../../assets/img/Homme.png";
import "./Info.css";

const Info = () => {
  return (
    <>
      <div id="info" className="info">
        <h1 className="nosotros">SOBRE NOSOTROS</h1>
        <p className="parrafo1">
            Bienvenido a Social Lab: Impulsando el Cambio a través de la
            Tecnología
          </p>
        <div className="grid">
          <section>
          <h2 className="obj">OBJETIVO ESTRATEGICO</h2>
          <p className="parrafo2">
            Nos enorgullece facilitar el acceso tecnológico a organizaciones sin
            fines de lucro y fundaciones; contribuyendo a la automatización,
            creación de páginas web y mejora de plataformas. Nuestro propósito
            es apoyar iniciativas alineadas con los Objetivos de Desarrollo
            Sostenible (ODS).
          </p>
          </section>
          <div className="image-container">
            <img
              className="info-image"
              src={info}
              alt="imagen representativa de informacion"
            />
          </div>
        </div>
        <img
          className="homme"
          src={Homme}
          alt="imagen representativa de informacion"
        />
      </div>
    </>
  );
};

export default Info;
