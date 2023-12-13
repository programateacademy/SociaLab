import React, { useState, useEffect} from 'react';
import { SlArrowUp } from 'react-icons/sl';
import "./Up.css";

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`button-up ${isVisible ? "visible" : ""}`}
      onClick={handleClick}
    >
      <SlArrowUp />
    </div>
  );
};

export default ButtonUp;