import "../styles/Header.scss";

const Header = () => {
  console.log("El componente Header se ha montado");

  return (
    <header className="header">
      <img src="/logo.png" className="logo" alt="Logo" />
      <nav className="nav">
        <ul className="ul-list">
          <li>
            <a href="#1" className="links">Sobre mí</a>
          </li>
          <li>|</li>
          <li>
            <a href="#2" className="links">Proyectos</a>
          </li>
          <li>|</li>
          <li>
            <a href="#3" className="links">Curso AWS re/Start</a>
          </li>
          <li>|</li>
          <li>
            <a href="#4"className="links" >Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
