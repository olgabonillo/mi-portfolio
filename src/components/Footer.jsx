import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-separator"></div>

      <section id="4">
        <h1 className="title-sections">¿Tienes un proyecto o idea? ¡Contáctame!</h1>
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
            href="https://wa.me/671081788"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="logo-container">
          <img src="/logoblanco.png" className="logo-blanco" alt="Logo" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
