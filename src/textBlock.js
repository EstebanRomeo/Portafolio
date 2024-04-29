import './App.css';
import yo from "./images/yo.jpg"

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
            <div class="card">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner"><img src={yo} className='foto'></img></div>
                </div>
                <div class="card1">
                <span class="title1">Hasta ahora</span>
                <div class="card__tags1">
                    <ul class="tag">
                    <li class="tag__name">JavaScript</li>
                    <li class="tag__name">Css</li>
                    <li class="tag__name">html</li>
                    <li class="tag__name">ux/ui</li>
                    <li class="tag__name">React Js</li>
                    <li class="tag__name">Node Js</li>
                    <li class="tag__name">Express</li>
                    <li class="tag__name">TypeScript</li>
                    </ul>
                </div>
                </div>

                <h1 id="textblock-title">Sobre mí</h1>
                <p id="textblock-content">
                ¡Hola! Soy Esteban Nicolás Romeo, un apasionado de la tecnología 
                y el desarrollo web con sede en Río Cuarto, Córdoba. Con 21 años de edad y una firme determinación por aprender y crecer en el mundo del desarrollo, estoy en camino de completar mis estudios en desarrollo fullstack.<br></br>
                Mi viaje en el mundo de la programación y el diseño web comenzó en el tercer año de la secundaria, cuando tenía apenas 15 años. Desde entonces, he estado inmerso en el fascinante mundo de la creación web, explorando tanto el front-end como el back-end. A lo largo de mi trayectoria, he enfrentado desafíos y momentos de frustración, pero cada obstáculo ha sido una oportunidad para aprender y crecer.<br></br>
                Mi pasión por la tecnología y el desarrollo web me ha llevado a seguir aprendiendo y explorando nuevas tecnologías y técnicas. Actualmente, estoy enfocado en fortalecer mis habilidades en el desarrollo backend, buscando dominar las complejidades de la lógica y la arquitectura de servidores.<br></br>
                Me considero una persona curiosa y comprometida, siempre en busca de nuevas oportunidades para ampliar mis conocimientos y mejorar mis habilidades. Creo firmemente en la importancia de mantenerse actualizado en un campo tan dinámico como el desarrollo web, y estoy constantemente buscando nuevas formas de ofrecer una experiencia excepcional a mis clientes y usuarios.</p>
                <h3 className='redes'>Mis Redes:</h3>
            </div>
            <div class="card2">
                <a class="social-link12" href='https://github.com/EstebanRomeo'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </a>
                <a class="social-link22" href='https://www.linkedin.com/in/esteban-romeo-2a7949222/' >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>          </a>
                
                <a class="social-link32" href='https://www.instagram.com/esteban_romeo7'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path d="M17,43h14c5.523,0,10-4.477,10-10v-2H7v2C7,38.523,11.477,43,17,43z"></path><path fill="#fff" d="M32,40H16c-4.418,0-8-3.582-8-8V16c0-4.418,3.582-8,8-8h16c4.418,0,8,3.582,8,8v16	C40,36.418,36.418,40,32,40z"></path><path d="M32,41H16c-4.962,0-9-4.038-9-9V16c0-4.962,4.038-9,9-9h16c4.962,0,9,4.038,9,9v16C41,36.962,36.962,41,32,41z M16,9	c-3.86,0-7,3.14-7,7v16c0,3.86,3.14,7,7,7h16c3.86,0,7-3.14,7-7V16c0-3.86-3.14-7-7-7H16z"></path><path d="M24,15c-4.962,0-9,4.038-9,9s4.038,9,9,9s9-4.038,9-9S28.962,15,24,15z M24,31c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7	S27.86,31,24,31z"></path><circle cx="33.5" cy="14.5" r="1.5"></circle>
                </svg>
                </a>
                <a class="social-link42" href='https://www.facebook.com/profile.php?id=100008930887802&locale=es_LA'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#fff"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                </a>
            </div>             
        </div>
    );
}

export default TextBlock;