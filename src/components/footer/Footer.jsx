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
      <footer className="footer">
      
            <div className="logos">
              <img src={LogoE} alt="Logo EducaMas" className="logoE" />
              <img src={Logo} alt="Logo EducaMas" className="logo" />
              <img src={Socials} alt="Logo EducaMas" className="socials" />
            </div>
            <div className="tabla">
              {/*<tbody>
                <tr>*/}
                  <div className="footer-content">
                    <h1>Enlaces</h1>
                    <ul>
                      <li>
                        <a href="/" className="content-link">Inicio</a>
                      </li>
                      <li>
                        <a href="/#info" className="content-link">Sobre Nosotros</a>
                      </li>
                      <li>
                        <a href="/#services" className="content-link">Servicios</a>
                      </li>
                      <li>
                        <a href="/#portfolio" className="content-link">Portafolio</a>
                      </li>
                      <li>
                        <a href="/#form" className="content-link">Formulario</a>
                      </li>
                    </ul>
                  </div>
                  <div className="social">
                    
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

                                  
                  </div>
                  <div className="contact">
                    <h1>Contacto</h1>
                    <p>Cra. 13 #90-17</p>
                    <p>311 4508935</p>
                  </div>
               {/*</div> </tr>
                
              </tbody>*/}
            </div>
        
            <div colSpan="3" id="derecho">
                    &copy; COPYRIGHT 2023. TODOS LOS DERECHOS RESERVADOS.
                  <span className="policy">POLITICAS DE PRIVACIDAD</span>
            </div>
      </footer>
    </>
  );
};

export default Footer;


  
  

