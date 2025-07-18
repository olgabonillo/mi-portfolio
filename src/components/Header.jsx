import "../styles/Header.scss";
import logoNegro from "../assets/logonegro.png";
import React, { useState } from 'react';

const Header = () => {
  console.log("El componente Header se ha montado");
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src={logoNegro} alt="logo header" className="logo-negro"/>
        <button className="menu-toggle" aria-label="Abrir menú" onClick={toggleMenu}> 
          &#9776;
        </button>
        <nav className={`nav ${isOpen ? 'show' : ''}`}> 
          <ul className="ul-list">
            <li>
              <a href="#sobre-mi" className="links" onClick={() => setIsOpen(false)}>
                Sobre mí
              </a>
            </li>
            <li className="separated">|</li>
            <li>
              <a href="#proyectos" className="links" onClick={() => setIsOpen(false)}>
                Proyectos
              </a>
            </li>
            <li className="separated">|</li>
            <li>
              <a href="#aws" className="links" onClick={() => setIsOpen(false)}>
                Curso AWS re/Start
              </a>
            </li>
            <li className="separated">|</li>
            <li>
              <a href="#devops" className="links" onClick={() => setIsOpen(false)}>
                Y... ¿ahora qué?
              </a>
            </li>
            <li className="separated">|</li>
            <li>
              <a href="#contacto" className="links" onClick={() => setIsOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;