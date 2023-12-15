import React, { Children } from "react";
import { Link } from "react-router-dom";
import LogoEdu from "../../assets/LogEducaMas.jpg";

const Navbar = () => {
  return (
    <div className="Header">
      <nav className="Botones" >
        <ul>
          <li>
            <a href="#Inicio" className="btn1">INICIO</a>
          </li>
          <li>
            <a href="#info" className="btn2">SOBRE NOSOTROS</a>
          </li>
          <li>
            <a href="#services" className="btn3">SERVICIOS</a>
          </li>

<<<<<<< HEAD
export default Navbar
=======
          <div className="Logo">
            <img src={LogoEdu} />
          </div>

          <li>
            <a href="#portfolio" className="btn4">PORTAFOLIO</a>
          </li>
          <li>
            <a href="#form" className="btn3">FORMULARIO</a>
          </li>
          {Children}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
>>>>>>> Home
