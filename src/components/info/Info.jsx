import info from "../../assets/img/info.png";
import "./Info.css";

const Info = () => {
  return (
    <div id="sobreNosotros">
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
      </div>
    </div>
  );
};

export default Info;
