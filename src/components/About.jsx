import '../styles/About.scss'

const About = () => {
    console.log("El componente About se ha creado")

    return (
      <section id="quien-soy">
        <h1 className="title-sections">Sobre mí</h1>
        <p className='text-sections'>Tras muchos años en un trabajo que no me llenaba, decidí que era el momento de darle un giro a mi vida. El mundo de la tecnología me llamó la atención. Primero me lancé a estudiar un bootcamp de programación web. Al finalizarlo, continué mi formación con un bootcamp de AWS re/Start. Gracias a estas experiencias, descubrí que este mundo me fascina por completo. Ahora mi gran ilusión es poder despegar mi carrera profesional aquí, porque realmente he encontrado lo que me gusta y quiero seguir creciendo personal y profesionalmente dedicándome a esto.</p>
      </section>
    );
  };
  
  export default About;
  