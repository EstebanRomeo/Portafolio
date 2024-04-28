import React from 'react'
import EstilosProyectos from "./EstilosProyectos.css"

const Contacto = () => {
  return (
    <div className='containerContacto'>
        <div className='contacto'>
            <div className='infoCon'>
                <h1>¡ENVÍAME UN MENSAJE!</h1>
                <h2>¿Tenes alguna pregunta o propuesta, o simplemente quieres
                saludar? Adelante.</h2>
            </div>
            <div className='containerFormulario'>
                <div class="form-container">
                    <div class="form">
                        <form action='https://formspree.io/f/meqyvyry' method='POST'>
                        <input placeholder="Nombre" type="text" class="input"></input>
                        <input placeholder="Email" id="mail" type="email" class="input"></input>
                        <textarea placeholder="Hola, creo que nesecitariamos un diseño para los productos de nuestra Compañia X. ¿Me podrias pasar más información?" rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
                        <div class="button-container">
                        <div class="send-button"><input class="send-button" type='submit' value="Enviar"></input></div>
                        <div class="reset-button-container">
                            <div id="reset-btn" class="reset-button">Borrar</div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacto