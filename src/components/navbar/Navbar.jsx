import React, {useEffect}from "react";
import Logo from "../../assets/img/Logo.png";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navegador = document.querySelector("header");
      if (navegador) {
        navegador.classList.toggle("abajo", window.scrollY > 130);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
        <header className="Header">
          <nav className="Botones">
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
                <FaBars className="icono" />
              </label>
            <ul className="left">
              <li>
                <a href="/" className="btn">
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
            </ul>
          </nav>
        </header>
      <section></section>
      <script type="text/javascript">
      </script>
    </>
  );
};

export default Navbar;