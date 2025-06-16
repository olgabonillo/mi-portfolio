import "../styles/Projects.scss";
import project1Img from "../assets/project1.jpeg";
import project2Img from "../assets/project2.jpeg";
import project3Img from "../assets/project3.jpeg";
import project4Img from "../assets/project4.jpeg";
import project5Img from "../assets/project5.jpeg";
import project6Img from "../assets/project6.jpeg";

const Header = () => {
  return (
    <header>
      <section id="2">
        <h1 className="title-sections-2">Proyectos</h1>
        <div className="container">
          <div className="project-card">
            <div className="project-image">
              <img src={project1Img} alt="Proyecto 1" />
            </div>
            <div className="project-info">
              <p className="text-sections-2">
                1. Este proyecto está utilizando <strong>HTML y SCSS</strong> como
                base estructural. Fue mi primer paso en el desarrollo web. Se
                trata de un proyecto de una simulación de una página web de
                productos escolares:
              </p>
              <a
                href="https://beta.adalab.es/modulo-1-evaluacion-final-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                https://beta.adalab.es/modulo-1-evaluacion-final-olgabonillo/
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="project-card">
            <div className="project-image">
              <img src={project2Img} alt="Proyecto 2" />
            </div>
            <p className="text-sections-2">
              2. Proyecto desarrollado con <strong>JavaScript</strong>. Se trata
              de un juego que adivina un número, a raíz del número que escribes
              en el buscador. Además tiene un contador de números de intento:
            </p>
            <a
              href="https://beta.adalab.es/modulo-1-evaluacion-final-olgabonillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              https://olgabonillo.github.io/modulo-2-evaluacion-intermedia-olgabonillo/
            </a>
          </div>
        </div>
        <div className="container">
          <div className="project-card">
            <div className="project-image">
              <img src={project3Img} alt="Proyecto 3" />
            </div>
            <p className="text-sections-2">
              3. Proyecto desarrollado con <strong>JavaScript</strong>. Se trata
              de un buscador de series de anime:
            </p>
            <a
              href="https://beta.adalab.es/modulo-2-evaluacion-final-olgabonillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              https://beta.adalab.es/modulo-2-evaluacion-final-olgabonillo/
            </a>
          </div>
        </div>
        <div className="container">
          <div className="project-card">
            <div className="project-image">
              <img src={project4Img} alt="Proyecto 4" />
            </div>
            <p className="text-sections-2">
              4. Proyecto desarrollado con <strong>JavaScript</strong>. Se trata
              de una especie de "Twitter", en la que puedes seleccionar
              contactos, guardar los datos y recuperar datos:
            </p>
            <a
              href="https://beta.adalab.es/modulo-2-evaluacion-final-bis-olgabonillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              https://beta.adalab.es/modulo-2-evaluacion-final-bis-olgabonillo/
            </a>
          </div>
        </div>
        <div className="container">
          <div className="project-card">
            <div className="project-image">
              <img src={project5Img} alt="Proyecto 5" />
            </div>
            <p className="text-sections-2">
              5. Proyecto desarrollado con <strong>React</strong>. Se trata de
              un buscador de personajes de Rick And Morty:
            </p>
            <a
              href="https://beta.adalab.es/modulo-3-evaluacion-final-olgabonillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              https://beta.adalab.es/modulo-3-evaluacion-final-olgabonillo/
            </a>
          </div>
        </div>
        <div className="container">
          <div className="project-card">
            <div className="project-image">
              <img src={project6Img} alt="Proyecto 6" />
            </div>
            <p className="text-sections-2">
              6. Proyecto desarrollado con <strong>React</strong>. Se trata de
              una página web de Yoga, en la que la instructora Jéssica González,
              explica los beneficios, características y mejores kriyas de yoga.
              Este proyecto aún está en desarrollo:
            </p>
            <a
              href="https://olgabonillo.github.io/proyecto-personal-olga-bonillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              https://olgabonillo.github.io/proyecto-personal-olga-bonillo/
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
