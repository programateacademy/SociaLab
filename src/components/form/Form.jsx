import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';
import lineForm from '../../assets/img/imgForm/lineFormBetween.svg'

const Form = () => {

  /*const [input, setInput] = useState()
  const [full, setfull] = useState()*/

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gmuij79', 'template_47qidvc', form.current, 'BH4fKMw7xWWl-qm4R')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      },
      (error) => {
          console.log(error.text);
      });
  };

  const sended = (reset) => {
    alert('Formulario enviado');
  }
  /*const btnAbrirModal = document.getElementById('pop-upOpen')

  btnAbrirModal.addEventListener("click",()=>{
    ModuleGraph.showModal();
  })*/

  return (
    <div className='containerFatherForm' id='form'>
      <div className='containerText'>
        <h2 className='titleForm'>Construyendo un futuro sostenible con tecnología accesible</h2>
        <p className='pForm'>Forma parte del movimiento: Facilitamos tecnología para organizaciones sin fines de lucro y fundaciones. ¡Completa el formulario y únete a nuestra misión de transformar el acceso tecnológico!</p>
      </div>

      <div className='line'> <img src={lineForm} alt="."/></div>

      <div>
        <form className='containerForm' ref={form} onSubmit={sendEmail} id='reset' >

          <input className='input locI1' type="text" name="org_name" placeholder='Nombre de la empresa / organización'/>

          <input className='input locI2' type="text" name="org_project_approach" placeholder='Enfoque o proyecto actual de la organización' />
          
          <input className='input locI3' type="text" name="user_name" placeholder='Nombre del responsable del proyecto'/>

          <input className='input locI4' type="number" name="user_phone" placeholder='Teléfono de contacto del responsable'/>

          <input className='input locI5' type="email" name="user_email" placeholder='Email  de contacto del responsable'/>

          <select name="multiple1" className='select locSelect1'>
            <option selected disabled>Status actual de la página web:</option>
            <option className='option' value="Diseño web desde cero">Diseño web desde cero</option>
            <option className='option' value="Diseño web nuevo a partir de una página web existente">Diseño web nuevo a partir de una página web existente</option>
          </select>

          <select name="multiple2"className='select .locSelect2'>
            <option selected disabled >Tipo de desarrollo:</option>
            <option className='option' value="Creación de sitio web corporativo con registro de usuarios con roles asignados">Creación de sitio web corporativo con registro de usuarios</option>
            <option className='option' value="Creación de landing page para recolección de fondos">Creación de landing page para recolección de fondos</option>
            <option className='option' value="Creación de un sistema intranet extranet (Intranet: Es una plataforma a la que únicamente pueden acceder los propios empleados de la compañía. Extranet: Cuando se puede acceder a ella a través de Internet por parte de usuarios externos.)">Creación de un sistema intranet extranet</option>
            <option className='option' value="Crear una tienda online eCommerce (tienda online de productos o servicios)">Crear una tienda online eCommerce</option>
            <option className='option' value="Creacion de  web educativa">Creacion de  web educativa</option>
            <option className='option' value="Creacion de  sitio web para seguimiento de procesos">Creacion de  sitio web para seguimiento de procesos</option>
          </select>

          <textarea className='textarea' name="message" placeholder='Cuentanos del proyecto y lo que requiere.' />
          
          <button className='button' type="submit" value="Send" onClick={sended}> Enviar </button>
 
        </form>
      </div>
    </div>
  );
};

export default Form



