import "../styles/Header.scss";

const Header = () => {
  console.log("El componente Header se ha montado");

  return (
    <header className="header">
      <img src="/logo.png" className="logo" alt="Logo" />
      <button class="menu-toggle" aria-label="Abrir menú">&#9776;</button>
      <nav className="nav">
        <ul className="ul-list">
          <li>
            <a href="#1" className="links">Sobre mí</a>
          </li>
          <li className="separated">|</li>
          <li>
            <a href="#2" className="links">Proyectos</a>
          </li>
          <li className="separated">|</li>
          <li>
            <a href="#3" className="links">Curso AWS re/Start</a>
          </li>
          <li className="separated">|</li>
          <li>
            <a href="#4"className="links" >Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
