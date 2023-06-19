
import React from 'react';
import './Social.css';

function Social() {
  return (
    <div className="Social-container">       
      <div class="Container">
        <div class="row">
          <div class="col-8">
            <div className="Social-title">
              <h1>Pruebas Sociales</h1>
            </div>
            <div className='Social-subtitle'>
              <p>Evaluación y Análisis del Comportamiento Social</p>
            </div>
            <div className='Social-description'>
              <p>¡Bienvenido al area social!</p>
              <p>En esta área recordaremos la importancia del aspecto social para llevar una vida saludable plena</p>
              <p>Nuestra página de Pruebas Sociales te ofrece una variedad de evaluaciones y análisis para comprender y mejorar tu comportamiento social. Ya sea que estés interesado en medir tu nivel de empatía, habilidades de comunicación, inteligencia emocional o capacidad de trabajo en equipo, nuestro equipo de expertos está aquí para ayudarte. Descubre nuestras pruebas especializadas, programas de desarrollo personal y asesoramiento profesional para mejorar tus habilidades sociales y alcanzar relaciones más saludables y exitosas. ¡Únete a nosotros en este viaje hacia un mayor entendimiento y éxito en el ámbito social!</p>
              <p>Si deaseas continuar, sigue moviendote hacia abajo.</p>
            </div>
          </div>
          <div class="col-2"> 
            <div className="Social-logo">
              <img src="/Social.png" alt="Imagen" className="social-image" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="Social-pruebas">
        <h2>Pruebas</h2>
      </div>



      <div className="Social-buttons">
      <div class="col"> 
        <a href="/Gijon">
          <img src="/Gijon.png" alt="Botón 1" />
        </a>
      </div>
      </div>


      <div className="Social-contact-menu">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Correo" />
        <input type="text" placeholder="Comentario" />
      </div>
    </div>
  );
}

export default Social;