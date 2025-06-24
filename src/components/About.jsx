import "../styles/About.scss";
import foto from "../assets/foto.jpeg"; // Esta foto es provisional, la quiero cambiar por otra más profesional
import logos from "../assets/tech-logos.jpeg"; // imagen con los logos de las tecnologías que manejo

const About = () => {
  console.log("El componente About se ha creado");

  return (
    <section id="1" className="about-section">
      <h1 className="title-sections">Sobre mí</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={foto} alt="Foto de Olga Bonillo" />
        </div>
        <div className="text-sections">
          <p>
            ¡Hola! Mi nombre es Olga Bonillo y me encantaría contaros qué me
            trae hasta aquí...
            <br />
            Durante mucho tiempo sentí que me faltaba algo, una chispa, un motor
            que me impulsara de verdad. Fue entonces cuando, casi por
            casualidad, descubrí el mundo del desarrollo web… y todo cambió. La
            tecnología me atrapó desde el primer momento: su lógica, su
            creatividad, su capacidad para construir cosas increíbles desde
            cero. Me di cuenta de que eso era lo que realmente me apasionaba.
            Tomé la decisión de dar un giro de 180º a mi vida profesional. Dejé
            atrás el camino que había recorrido hasta entonces y me lancé de
            lleno a formarme como Desarrolladora Web. No fue una decisión fácil,
            pero sí una de las más valientes y gratificantes que he tomado.
            Desde entonces, he estado inmersa en un viaje de aprendizaje
            constante. Una de las cosas que más me motiva del desarrollo web es
            que es un campo donde nunca dejas de aprender. Después de formarme
            en desarrollo web, quise ir un paso más allá y amplié mis
            conocimientos en tecnologías cloud con AWS, lo cual me ha dado una
            visión mucho más amplia del desarrollo moderno. Pero esa parte te la
            cuento en otra sección... Este portfolio que estás visitando es una
            muestra de todo ese camino. Lo he diseñado y desarrollado yo misma
            desde cero, aplicando lo que he aprendido, probando cosas nuevas y
            dejando un pedacito de mí en cada sección. Aquí podrás encontrar mis
            proyectos, mis habilidades y, sobre todo, mi evolución. Estoy muy
            ilusionada con lo que viene y preparada para seguir aprendiendo,
            creciendo y aportando valor a través de la tecnología.
            <br />
            ¡Gracias por leerme y por acompañarme en esta aventura!
          </p>
        </div>
      </div>
      <div className="tech-logos">
        <img src={logos} alt="Logos de tecnologías" />
      </div>
    </section>
  );
};

export default About;
