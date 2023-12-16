import React from "react";
import Logo from "../../assets/img/LogEducaMas.jpg";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
   <>
       <div className="linea">
          <header className="Header">
      <nav className="Botones">
      <input type="checkbox" id="check" />
        <ul className="left">
          <li>
            <a href="#/" className="btn">
              INICIO
            </a>
          </li>
          <li>
            <a href="#info" className="btn">
              SOBRE NOSOTROS
            </a>
          </li>
          <li>
            <a href="#services" className="btn">
              SERVICIOS
            </a>
          </li>
        </ul>
          <img className="Logo" src={Logo} alt="Logo EducaMas" />

        <ul className="right">
          <li>
            <a href="#portfolio" className="btn">
              PORTAFOLIO
            </a>
          </li>
          <li>
            <a href="#form" className="btn1">
              FORMULARIO
            </a>
          </li>

        <label for="check" className="checkbtn">
          <FaBars className="icono" />
        </label>
        </ul>

      </nav>
    </header>
    </div>
    <section></section>
   </> 


  );
};

export default Navbar;