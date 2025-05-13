import "./Header.scss";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Olga Bonillo" className="logo" />
      <h1>portfolio Olga Bonillo</h1>
      <nav className="navegacion">
        <ul>
          <li>
            <a href="#quien-soy">Quién soy</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#curso-aws">Curso AWS re/Start</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
