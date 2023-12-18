import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import banner from "../../assets/img/banner.jpg";
import "./Banner.css";
import { FaCheck } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 2);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const images = [banner, banner];
  const contents = [
    {
      title: "Construimos Software Moderno",
      rows: [
        ["Seguridad total", "Colaboración en equipo"],
        ["Potente panel administrativo", "Crear y diseñar responsive"],
      ],
    },
    {
      title: "Ofrecemos Servicios Estándar",
      rows: [
        ["Servicios confiables y accesibles", "Soluciones a tus necesidades"],
        ["Calidad y consistencia", "Servicios esenciales"],
      ],
    },
  ];

  return (
    <Carousel
      selectedItem={currentSlide}
      className="banner"
      showThumbs={false}
      showStatus={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`banner${index + 1}`} />
          <div className="text1">
            <h1 className="h1Banner">{contents[index].title}</h1>
            <table className="table1">
              {contents[index].rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((text, textIndex) => (
                    <td key={textIndex}>
                      <FaCheck /> {text}
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
