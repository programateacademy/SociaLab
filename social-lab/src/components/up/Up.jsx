import React from "react";
import { useState, useEffect } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";
import './Up.scss';
const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar u ocultar el botón según la posición de desplazamiento
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100); // Ajusta este valor según tu preferencia
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Manejar el clic para volver arriba
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`button-up ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
    >
      <HiArrowNarrowUp />
    </div>
  );
};

export default ButtonUp;
