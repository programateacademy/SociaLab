import React from "react";
import Logo from "../../assets/img/Logo.svg";
import LogoE from "../../assets/img/LogEducaMas.svg";
import Socials from "../../assets/img/socials.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
            <div className="footer">
            <div className="logos">
              <img src={LogoE} alt="Logo EducaMas" className="logoE" />
              <img src={Logo} alt="Logo EducaMas" className="logo" />
              <img src={Socials} alt="Logo EducaMas" className="socials" />
            </div>
            <table className="tabla">
              <tbody>
                <tr>
                  <td className="footer-content">
                    <h1>Enlaces</h1>
                    <ul>
                      <li>
                        <a href="/inicio" className="content-link">Inicio</a>
                      </li>
                      <li>
                        <a href="/nosotros" className="content-link">Sobre Nosotros</a>
                      </li>
                      <li>
                        <a href="/servicios" className="content-link">Servicios</a>
                      </li>
                      <li>
                        <a href="/Portafolio" className="content-link">Portafolio</a>
                      </li>
                      <li>
                        <a href="/Formulario" className="content-link">Formulario</a>
                      </li>
                    </ul>
                  </td>
                  <td className="social">
                    
                    <h1>Conectemos</h1>
                    <p>Síguenos en las redes sociales</p>
                    
                        <a href="https://www.facebook.com/somoseducamas/" className="social-link">
                        <FaFacebook />
                        </a>
                      
                        <a href="" className="social-link">
                        <FaTiktok />
                        </a>
                      
                        <a href="https://www.facebook.com/somoseducamas/" className="social-link">
                        <FaInstagram />
                        </a>
                    
                        <a href="https://www.linkedin.com/company/educam%C3%A1s/?originalSubdomain=co" className="social-link">
                        <FaLinkedin />
                        </a>
                      
                        <a href="https://open.spotify.com/show/4mYZpSGP4SJMEDvFilTNRp?si=5bNY3MFmTpS1Fq5GtiUpag.&nd=1&dlsi=852c01b106c24518" className="social-link">
                        <FaSpotify />
                        </a>

                                  
                  </td>
                  <td className="contact">
                    <h1>Contacto</h1>
                    <p>Cra. 13 #90-17</p>
                    <p>311 4508935</p>
                  </td>
                </tr>
                
              </tbody>
            </table>
            </div>
            <tr>
                  <td colSpan="3" id="derecho">
                    &copy; 2023 Tu Empresa. Todos los derechos reservados.
                  </td>
                </tr>
      </footer>
    </>
  );
};

export default Footer;


  
  

