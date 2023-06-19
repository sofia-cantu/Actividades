/*
import Title from '../../components/Title'

function Profile(){

    const name = 'Sofía Cantú';

    return (
        <Title
          title = 'Mi Perfil'
          name = {name} 
          city ='Monterrey'
        />
    );
}

export default Profile;
*/

import Title from '../../components/Title.js'
import './Profile.css';
import React from 'react'

function ProfileSkills(props) {
  const { skills } = props;

  if (!Array.isArray(skills)) {
    skills = []; // fallback to empty array if skills is not an array
  }

  return (
    <div className="profile-skills">
      <h2>Habilidades:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}


function Profile(){

    const name = 'Sofía Cantú Talamantes';
    const profession = 'ITC';
    const city = 'Monterrey';
    const description = '¡Te presento mi pagina!';
    const skills = [ 'Swift', 'HTML', 'CSS', 'C++'];



    return (
      <><><><><><><div className="profile">
        <div className="profile-image">
          <img src="/fotoFormal.jpg" width="95px" alt="Sofía Cantú" />
        </div>
        <div className="profile-info"></div>
        <Title
          title='Mi Perfil'
          name={name}
          profession={profession}
          city={city}
          description={description} />
      </div><div>
          <ProfileSkills skills={skills} />
          
        </div></><h2 class="seccionado">Sobre mi</h2></><hr class="w3-opacity"></hr></><p class="margen">Soy estudiante de informática y me apasiona aprender hacking ético y desarrollo web. Mis antecedentes implican liderazgo tanto en grupos ecologistas como en tecnología, lo que he aprovechado para pronar mis habilidades técnicas. Poseo fuertes habilidades interpersonales y tengo una capacidad demostrada para trabajar eficazmente con los demás hacia un objetivo común.
        </p></><h3 class="w3-padding-16 w3-text-light-grey">Mis hoobies</h3></><p class="textoComun">Dibujo</p><p class="textoComun">Canto</p><p class="textoComun">Tejer</p><p class="textoComun">Videojuegos</p><p class="textoComun">Yoga</p><div class="w3-white">
          <div class="w3-dark-grey"></div>
        </div></>
      );
}

export default Profile;


///.....