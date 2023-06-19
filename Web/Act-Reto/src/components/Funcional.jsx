import React from 'react';
import './Funcional.css';

function Funcional() {
  return (
    <div className="Funcional-container">       
      <div class="Container">
        <div class="row">
          <div class="col-8">
            <div className="Funcional-title">
              <h1>Pruebas Funcionales</h1>
            </div>
            <div className='Funcional-subtitle'>
              <p>Evaluación y Optimización del Desempeño</p>
            </div>
            <div className='Funcional-description'>
              <p>¡Bienvenido al area funcional!</p>
              <p>En esta área recordaremos la importancia del aspecto funcional para llevar una vida saludable plena</p>
              <p>Nuestra página de Pruebas Funcionales ofrece una variedad de evaluaciones especializadas para medir y mejorar el rendimiento físico en actividades funcionales. Ya sea que busques evaluar tu resistencia, flexibilidad, coordinación o equilibrio, nuestro equipo de profesionales altamente capacitados está listo para ayudarte a alcanzar tus metas. Descubre nuestras pruebas personalizadas, programas de entrenamiento especializados y asesoramiento experto para optimizar tu desempeño funcional y mejorar tu calidad de vida. Únete a nosotros en esta emocionante experiencia hacia un cuerpo fuerte, ágil y funcional. ¡Vamos juntos a superar tus límites!</p>
              <p>Si deaseas continuar, sigue moviendote hacia abajo.</p>
            </div>
          </div>
          <div class="col-2"> 
            <div className="Funcional-logo">
              <img src="/Funcional.png" alt="Imagen" className="Funcional-image" />
            </div>
          </div>
      </div>
      
      <div className="Funcional-pruebas">
        <h2>Pruebas</h2>
      </div>
      
      <div className="Funcional-buttons">
      <div class="col"> 
        <a href="/Lawton">
          <img src="/Lawton_Katz.png" alt="Botón 1" />
        </a>
      </div>
      <div class="col"> 
        <a href="/Katz">
          <img src="/Lawton_Katz.png" alt="Botón 2" />
        </a>
      </div>
      </div>

      <div className="Funcional-contact-menu">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Correo" />
        <input type="text" placeholder="Comentario" />
      </div>
    </div>
    </div>
  );
}

export default Funcional;