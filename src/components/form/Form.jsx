import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gmuij79', 'template_47qidvc', form.current, 'BH4fKMw7xWWl-qm4R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='container'>
      <form ref={form} onSubmit={sendEmail} className='field'>

        <input className='cuadros' type="text" name="org_name" placeholder='Nombre  de la empresa / organización'/>

        <input className='cuadros' type="text" name="org_project_approach" placeholder='Enfoque o proyecto actual de empresa u organización' />
        
        <input className='cuadros' type="text" name="user_name" placeholder='Nombre del responsable del proyecto'/>

        <input className='cuadros' type="text" name="user_phone" placeholder='Teléfono de contacto del responsable'/>

        <input className='cuadros' type="email" name="user_email" placeholder='Email  de contacto del responsable'/>

        <select name="multiple1" >
          <option selected disabled >Status actual de la página web:</option>
          <option value="Diseño web desde cero">Diseño web desde cero</option>
          <option value="Diseño web nuevo a partir de una página web existente">Diseño web nuevo a partir de una página web existente</option>
        </select>

        <select name="multiple2" id="lang" >
          <option selected disabled >Tipo de desarrollo:</option>
          <option value="Creación de sitio web corporativo con registro de usuarios con roles asignados">Creación de sitio web corporativo con registro de usuarios con roles asignados</option>
          <option value="Creación de landing page para recolección de fondos">Creación de landing page para recolección de fondos</option>
          <option value="Creación de un sistema intranet extranet (Intranet: Es una plataforma a la que únicamente pueden acceder los propios empleados de la compañía. Extranet: Cuando se puede acceder a ella a través de Internet por parte de usuarios externos.)">Creación de un sistema intranet extranet (Intranet: Es una plataforma a la que únicamente pueden acceder los propios empleados de la compañía. Extranet: Cuando se puede acceder a ella a través de Internet por parte de usuarios externos.)</option>
          <option value="Crear una tienda online eCommerce (tienda online de productos o servicios)">Crear una tienda online eCommerce (tienda online de productos o servicios)</option>
          <option value="Creacion de  web educativa">Creacion de  web educativa</option>
          <option value="Creacion de  sitio web para seguimiento de procesos">Creacion de  sitio web para seguimiento de procesos</option>
        </select>

        <textarea name="message" placeholder='Cuentanos del proyecto y lo que requiere.' />

        <button type="submit" value="Send"> Send </button> 
      </form>
    </div>
  );
};

export default Form



