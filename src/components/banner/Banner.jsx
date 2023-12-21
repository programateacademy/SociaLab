import React from "react";
import "./Banner.css";
import ImgBanner from "../../assets/img/banner.jpg";
import { LuCheck } from "react-icons/lu";

const Banner = () => {
  return (
    <>
      <div className="Bannerr">
        <img className="ImgBannerr" src={ImgBanner} alt="" />
        <div className="Contenido">
          <p className="titulo">Construimos Software Moderno</p>
          <p className="subtitulo">
            {" "}
            <LuCheck />
            Seguridad total
          </p>
          <p className="subtitulo">
            {" "}
            <LuCheck />
            Potente panel de administración
          </p>
          <p className="subtitulo">
            {" "}
            <LuCheck />
            Colaboración en equipo
          </p>
          <p className="subtitulo">
            {" "}
            <LuCheck />
            Crear y diseñar responsive
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
