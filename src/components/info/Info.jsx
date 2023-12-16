import info from "../../assets/img/info.png";

const Info = () => {
  return (
    <div className="grid">
      <div className="info-container">
        <h1>Bienvenido a Social Lab: Impulsando el Cambio a través de la Tecnología</h1>
        <h2>OBJETIVO ESTRATEGICO</h2>
        <p>
          Nos enorgullece facilitar el acceso tecnológico a organizaciones sin fines de lucro y fundaciones.
          Alineamos acciones con la estrategia empresarial, contribuyendo a la automatización, creación de páginas web y mejora de plataformas.
          Nuestro propósito es apoyar iniciativas alineadas con los Objetivos de Desarrollo Sostenible (ODS).
          Garantizamos que la tecnología sea accesible y efectiva para quienes trabajan incansablemente por mejorar el mundo.
        </p>
      </div>
      <div className="image-container">
        <img  src={info} alt="imagen representativa de informacion"/>
      </div>
    </div>
  );
};

export default Info;
