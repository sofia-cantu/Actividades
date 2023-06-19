import React from 'react';
import './Cognitiva.css';

function Cognitiva() {
  return (
    <div className="cognitiva-container">       
      <div class="Container">
        <div class="row">
          <div class="col-8">
            <div className="cognitiva-title">
              <h1>Pruebas Cognitivas</h1>
            </div>
            <div className='cognitiva-subtitle'>
              <p>Evaluación y Entrenamiento de las Funciones Mentales</p>
            </div>
            <div className='cognitiva-description'>
              <p>¡Bienvenido al area cognitiva!</p>
              <p>En esta área recordaremos la importancia del aspecto fisico para llevar una vida saludable plena</p>
              <p>Nuestra página de Pruebas Cognitivas ofrece una amplia variedad de evaluaciones y mediciones para determinar y mejorar el rendimiento físico. Ya sea que estés buscando conocer tu nivel de condición física, medir tu resistencia, fuerza, velocidad o agilidad, o simplemente desees evaluar tu progreso, nuestro equipo de profesionales capacitados está listo para ayudarte. Descubre nuestras pruebas especializadas, programas de entrenamiento personalizados y asesoramiento experto para optimizar tu desempeño físico y alcanzar tus metas. ¡Únete a nosotros en esta emocionante aventura hacia una mejor salud y bienestar físico!</p>
              <p>Si deaseas continuar, sigue moviendote hacia abajo.</p>
            </div>
          </div>
          <div class="col-2"> 
            <div className="cognitiva-logo">
              <img src="/Cognitiva.png" alt="Imagen" className="cognitiva-image" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="cognitiva-pruebas">
        <h2>Pruebas</h2>
      </div>



      <div className="cognitiva-buttons">
      <div class="col"> 
        <a href="/MMSE">
          <img src="/MMSE.png" alt="Botón 1" />
        </a>
      </div>
      <div class="col">
        <p> </p>
      </div>
      <div class="col"> 
        <a href="/Reloj">
          <img src="/Reloj.png" alt="Botón 2" />
        </a>
      </div>
      </div>


      <div className="cognitiva-contact-menu">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Correo" />
        <input type="text" placeholder="Comentario" />
      </div>
    </div>
  );
}

export default Cognitiva;