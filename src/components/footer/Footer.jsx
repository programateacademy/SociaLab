import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
   
    <footer className="container">
      <div >
        <div className="footer-links">
        <h1>Enlaces</h1>
          
            <a href="/inicio">Inicio</a>
            <a href="/nosotros">Sobre Nosotros</a>
            <a href="/servicios">Servicios</a>
            <a href="/Portafolio">Portafolio</a>
            <a href="/Formulario">Formulario</a>
          
        </div>
        <div className="social-links">
          <h1>Conectemos</h1>
          <p>Siguenos en las redes sociales</p>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className='Contacto'>
          <h1>Contacto</h1>
          <p>Cra. 13 #90-17</p>
          <p>311 4508935</p>


        </div>
        <p id='derecho'>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;


  
  

