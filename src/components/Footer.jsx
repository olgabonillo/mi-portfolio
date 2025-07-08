import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.scss";
import logoBlanco from "../assets/logoblanco.png";

const Footer = () => {
  return (
    <footer>
      <section id="contacto" className="footer-section">
        <div className="footer-separator"></div>
        <h1 className="title-sections">
          ¿Tienes un proyecto o idea? ¡Contáctame!
        </h1>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/olgabonillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/olgabonillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/olga-bonillo-barbera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+34671081788"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="logo-container">
        <img src={logoBlanco} alt="logo footer" className="logo-blanco"/>
        </div>
        <div>
          <p className="text-sections">
            © 2025 Olga Bonillo. Todos los derechos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
