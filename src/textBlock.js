import './App.css';
import yo from "./images/yo.jpg"

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">Sobre mí</h1>
                <img src={yo} className='foto'></img>
                <p id="textblock-content">
                ¡Hola! Soy Esteban Nicolás Romeo, un apasionado de la tecnología 
                y el desarrollo web con sede en Río Cuarto, Córdoba. Con 21 años de edad y una firme determinación por aprender y crecer en el mundo del desarrollo, estoy en camino de completar mis estudios en desarrollo fullstack.<br></br>
                Mi viaje en el mundo de la programación y el diseño web comenzó en el tercer año de la secundaria, cuando tenía apenas 15 años. Desde entonces, he estado inmerso en el fascinante mundo de la creación web, explorando tanto el front-end como el back-end. A lo largo de mi trayectoria, he enfrentado desafíos y momentos de frustración, pero cada obstáculo ha sido una oportunidad para aprender y crecer.<br></br>
                Mi pasión por la tecnología y el desarrollo web me ha llevado a seguir aprendiendo y explorando nuevas tecnologías y técnicas. Actualmente, estoy enfocado en fortalecer mis habilidades en el desarrollo backend, buscando dominar las complejidades de la lógica y la arquitectura de servidores.<br></br>
                Me considero una persona curiosa y comprometida, siempre en busca de nuevas oportunidades para ampliar mis conocimientos y mejorar mis habilidades. Creo firmemente en la importancia de mantenerse actualizado en un campo tan dinámico como el desarrollo web, y estoy constantemente buscando nuevas formas de ofrecer una experiencia excepcional a mis clientes y usuarios.</p>
            </div>
        </div>
    );
}

export default TextBlock;