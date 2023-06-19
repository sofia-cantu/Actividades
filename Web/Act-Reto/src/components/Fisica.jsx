import React from 'react';
import './Fisica.css';

function Fisica() {
  return (
    <div className="Fisica-container">       
      <div class="Container">
        <div class="row">
          <div class="col-8">
            <div className="Fisica-title">
              <h1>Pruebas Fisicas</h1>
            </div>
            <div className='Fisica-subtitle'>
              <p>Bienestar del cuerpo y el óptimo funcionamiento del organismo, que se encuentran en buen estado fisico, mental, emocional</p>
            </div>
            <div className='Fisica-description'>
              <p>¡Bienvenido al area fisica!</p>
              <p>En esta área recordaremos la importancia del aspecto fisico para llevar una vida saludable plena</p>
              <p>Nuestra página de Pruebas Físicas ofrece una amplia variedad de evaluaciones y mediciones para determinar y mejorar el rendimiento físico. Ya sea que estés buscando conocer tu nivel de condición física, medir tu resistencia, fuerza, velocidad o agilidad, o simplemente desees evaluar tu progreso, nuestro equipo de profesionales capacitados está listo para ayudarte. Descubre nuestras pruebas especializadas, programas de entrenamiento personalizados y asesoramiento experto para optimizar tu desempeño físico y alcanzar tus metas. ¡Únete a nosotros en esta emocionante aventura hacia una mejor salud y bienestar físico!</p>
              <p>Si deaseas continuar, sigue moviendote hacia abajo.</p>
            </div>
          </div>
          <div class="col-2"> 
            <div className="Fisica-logo">
              <img src="/Fisica.png" alt="Imagen" className="Fisica-image" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="Fisica-pruebas">
        <h2>Pruebas</h2>
      </div>

      <div className="Fisica-buttons">
      <div class="col"> 
        <a href="/SarcF">
            <img src="/Sarc-F.png" alt="Botón 1" />
          </a>
      </div>
      <div class="col">
        <p> </p>
      </div>
      <div class="col"> 
        <a href="/SSPB">
          <img src="/SSPB.png" alt="Botón 2" />
        </a>
      </div>
      <div class="col">
        <p> </p>
      </div>
      <div class="col"> 
      <a href="/CircPantorilla">
            <img src="/Circ-Pantorilla.png" alt="Botón 3" />
        </a>
      </div>
      </div>

      <div className="Fisica-buttons">
      <div class="col"> 
        <a href="/Up&Go">
          <img src="/Up & Go.png" alt="Botón 4" />
        </a>
      </div>
      <div class="col">
        <p> </p>
      </div>
      <div class="col"> 
        <a href="/Frail">
          <img src="/Frail.png" alt="Botón 5" />
        </a>
      </div>
      <div class="col">
        <p> </p>
      </div>
      <div class="col"> 
      <a href="/Fuerza">
          <img src="/Fuerza.png" alt="Botón 6" />
        </a>
      </div>
      </div>
      
      <div className="Fisica-contact-menu">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Correo" />
        <input type="text" placeholder="Comentario" />
      </div>
    </div>
  );
}

export default Fisica;