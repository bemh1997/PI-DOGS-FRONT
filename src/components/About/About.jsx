import style from './About.module.css'
import { Link } from 'react-router-dom';
import me from '../../assets/yo.jpg';
import arrow from '../../assets/arrow.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/javascript.png';
import reacticon from '../../assets/react.png';

const About = () =>{
  return (
    <div className={style.div}>
      <Link className={style.divReturnBack} to='/home'>
        <span>Regresar a Inicio</span>
        <img className={style.arrow} src={arrow} alt="arrow" />
      </Link> 
      <div className={style.divAbout}>
        <div className={style.buttons}>
          <Link className={style.xButton} to='/home'>
            <span>X</span>
          </Link> 
        </div>
        <h2>Sobre mí</h2>
        <img src={me} alt="About.me" width="200px" height="200px"/>
        <p>¡Hola! Soy Humberto Bernal, un apasionado estudiante de 25 años proveniente de ESCOM, IPN. Actualmente, me encuentro inmerso en el emocionante mundo del desarrollo web y formo parte del inspirador bootcamp de SoyHenry.com.</p>
        <p>Mi viaje en el mundo de la tecnología ha sido fascinante, y a lo largo de mi trayectoria, he adquirido habilidades y conocimientos en diversas tecnologías fundamentales para la creación de sitios web modernos y funcionales. Entre las herramientas con las que trabajo destacan HTML5, CSS3, ReactJS, Node.js y Redux.</p>
        <p>El trabajo en equipo y la colaboración son valores que considero fundamentales, y el bootcamp en SoyHenry.com me ha brindado la oportunidad de interactuar con personas talentosas y con ideas afines. Me entusiasma enfrentar desafíos complejos y encontrar soluciones innovadoras que impulsen el éxito de cada proyecto en el que me involucro.</p>
        <p>Cuando no estoy ocupado programando, disfruto de dedicar tiempo a mis hobbies, como leer sobre tecnología y explorar nuevos conceptos en el mundo del diseño web. Además, siempre estoy dispuesto a participar en proyectos creativos que me permitan poner a prueba mis habilidades y expandir mi horizonte profesional.</p>
        <p>Estoy emocionado de seguir aprendiendo y creciendo en el campo de la tecnología, y si tienes un proyecto o una idea interesante en mente, ¡estaré encantado de ser parte de ello!</p>
        <p>¡Gracias por visitar mi página web y compartir este emocionante viaje tecnológico conmigo!</p>
        <div className={style.divTecnologias}>
          <img src={html} alt="HTML5 icon" width="10%"/>
          <img src={css} alt="CSS3 icon" width="10%"/>
          <img src={js} alt="JavaScript icon" width="10%"/>
          <img src={reacticon} alt="ReactJS icon" width="10%"/>
        </div>      
      </div>
    </div>
  );
}

export default About;