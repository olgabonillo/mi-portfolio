import "../styles/Projects.scss";
import project1Img from "../assets/project1.jpeg";
import project2Img from "../assets/project2.jpeg";
import project3Img from "../assets/project3.jpeg";
import project4Img from "../assets/project4.jpeg";
import project5Img from "../assets/project5.jpeg";
import project6Img from "../assets/project6.jpeg";

const Project = () => {
  return (
    <header>
      <section id="proyectos">
        <h1 className="title-sections-2">Proyectos</h1>
        <div className="projects-list">
          <div className="project-card">
            <div className="project-image">
              <a
                href="https://beta.adalab.es/modulo-1-evaluacion-final-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <img src={project1Img} alt="Proyecto 1" />
              </a>
              <a
                href="https://beta.adalab.es/modulo-1-evaluacion-final-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                https://beta.adalab.es/modulo-1-evaluacion-final-olgabonillo/
              </a>
            </div>
            <div className="project-info">
              <p className="text-sections-2">
                Este trabajo fue mi primer paso en el desarrollo web. Se trata
                de un proyecto de una simulación de una página web de productos
                escolares.
                <br />Está diseñado utilizando grid, flexbox y media queries.
                <br />
                Proyecto desarrollado con <strong>HTML y SCSS</strong> como base
                estructural.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <a
                href="https://olgabonillo.github.io/modulo-2-evaluacion-intermedia-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <img src={project2Img} alt="Proyecto 2" />
              </a>
              <a
                href="https://olgabonillo.github.io/modulo-2-evaluacion-intermedia-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >  
                https://olgabonillo.github.io/modulo-2-evaluacion-intermedia-olgabonillo/
              </a>
            </div>
            <div className="project-info">
              <p className="text-sections-2">
                Juego que sirve para adivinar un número, a raíz del número que
                escribes en el buscador. Además tiene un contador de números de
                intento.
                <br/>Tiene un botón para poder realizar la prueba.
                <br />
                Proyecto desarrollado con <strong>JavaScript</strong>.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <a
                href="https://beta.adalab.es/modulo-2-evaluacion-final-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <img src={project3Img} alt="Proyecto 3" />
              </a>
              <a
                href="https://beta.adalab.es/modulo-2-evaluacion-final-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                https://beta.adalab.es/modulo-2-evaluacion-final-olgabonillo/
              </a>
            </div>
            <div className="project-info">
              <p className="text-sections-2">
                Buscador de series de anime.
                <br />
                En este proyecto puedes buscar series por nombre, filtrar por
                género y ver los detalles de cada serie. Se muestra una imagen de la portada.
                <br />
                Proyecto desarrollado con <strong>JavaScript</strong>.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <a
                href="https://beta.adalab.es/modulo-2-evaluacion-final-bis-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <img src={project4Img} alt="Proyecto 4" />
              </a>
              <a
                href="https://beta.adalab.es/modulo-2-evaluacion-final-bis-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                https://beta.adalab.es/modulo-2-evaluacion-final-bis-olgabonillo/
              </a>
            </div>
            <div className="project-info">
              <p className="text-sections-2">
                Simulación de un "Twitter", en la que puedes seleccionar
                contactos, guardar los datos y recuperar datos. Además, puedes seleccionar un usuario y el fondo cambia de color.
                <br />Tiene dos botones, uno para guardar cambios y otro para borrar cambios.
                <br/>También muestra una imagen del usuario, el nombre y el apellido.
                <br />
                Proyecto desarrollado con <strong>JavaScript</strong>.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <a
                href="https://beta.adalab.es/modulo-3-evaluacion-final-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <img src={project5Img} alt="Proyecto 5" />
              </a>
              <a
                href="https://beta.adalab.es/modulo-3-evaluacion-final-olgabonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                https://beta.adalab.es/modulo-3-evaluacion-final-olgabonillo/
              </a>
            </div>
            <div className="project-info">
              <p className="text-sections-2">
                Buscador de personajes de Rick And Morty.
                <br />
                En este proyecto puedes buscar personajes por nombre, filtrar
                por género y por estado, y ver los detalles de cada personaje.
                <br />Tiene un buscador que te permite buscar por nombre y un botón para limpiar el buscador.
                <br />Proyecto desarrollado con la librería de <strong>React.JS</strong>.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <a
                href="https://olgabonillo.github.io/proyecto-personal-olga-bonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <img src={project6Img} alt="Proyecto 6" />
              </a>
              <a
                href="https://olgabonillo.github.io/proyecto-personal-olga-bonillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                https://olgabonillo.github.io/proyecto-personal-olga-bonillo/
              </a>
            </div>
            <div className="project-info">
              <p className="text-sections-2">
                Página web de Yoga, en la que la instructora Jéssica González,
                explica los beneficios, características y mejores kriyas de
                yoga. 
                <br/>También incluye un apartado de contacto y una galería de imágenes.
                <br/>Este proyecto aún está en desarrollo a día de hoy.
                <br/>Proyecto desarrollado con la librería de <strong>React.JS</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Project;
