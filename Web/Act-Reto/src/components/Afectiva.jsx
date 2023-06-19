import React from 'react';
import './Afectiva.css';

function Afectiva() {
  return (
    <div className="Afectiva-container">       
      <div class="Container">
        <div class="row">
          <div class="col-8">
            <div className="Afectiva-title">
              <h1>Pruebas Afectivas</h1>
            </div>
            <div className='Afectiva-subtitle'>
              <p>Evaluación y Medición de las Emociones</p>
            </div>
            <div className='Afectiva-description'>
              <p>¡Bienvenido al area afectiva!</p>
              <p>En esta área recordaremos la importancia del aspecto afectivo para llevar una vida saludable plena</p>
              <p>Nuestra página de Pruebas Afectivas te ofrece una variedad de evaluaciones y mediciones diseñadas para comprender y evaluar las emociones. Desde la medición de estados de ánimo hasta la evaluación de la respuesta emocional ante estímulos específicos, nuestro equipo de expertos está aquí para ayudarte a explorar y comprender tu mundo afectivo. Descubre nuestras pruebas especializadas, análisis detallados y recursos útiles para profundizar en tu experiencia emocional y mejorar tu bienestar. Únete a nosotros en este viaje de autodescubrimiento y desarrollo emocional. ¡Comienza a explorar tus emociones hoy mismo!</p>
              <p>Si deaseas continuar, sigue moviendote hacia abajo.</p>
            </div>
          </div>
          <div class="col-2"> 
            <div className="Afectiva-logo">
              <img src="/Afectiva.png" alt="Imagen" className="afectiva-image" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="Afectiva-pruebas">
        <h2>Pruebas</h2>
      </div>



      <div className="Afectiva-buttons">
      <div class="col"> 
        <a href="/GDS">
          <img src="/GDS.png" alt="Botón 1" />
        </a>
      </div>
      </div>


      <div className="Afectiva-contact-menu">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Correo" />
        <input type="text" placeholder="Comentario" />
      </div>
    </div>
  );
}

export default Afectiva;