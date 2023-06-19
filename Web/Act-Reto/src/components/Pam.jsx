import React, { useState, useEffect } from 'react';
import './Pam.css';

function Pam() {
  const [person, setPerson] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [deathdate, setDeathdate] = useState('');
  const [guardian, setGuardian] = useState('');
  const [doctor, setDoctor] = useState('');
  const [isArchdioceseActive, setIsArchdioceseActive] = useState(false);
  const [archdiocese, setArchdiocese] = useState('');
  const [isDecanateActive, setIsDecanateActive] = useState(false);
  const [decanate, setDecanate] = useState('');
  const [isParishActive, setIsParishActive] = useState(false);
  const [parish, setParish] = useState('');

  useEffect(() => {
    // Aquí puedes realizar las llamadas a la API para obtener los datos de los dropdowns vacíos
    // y actualizar los estados correspondientes.
    // Ejemplo:
    // fetch('API_URL')
    //   .then(response => response.json())
    //   .then(data => {
    //     // Actualizar estados con los datos de la API
    //     setPerson(data.person);
    //     setGuardian(data.guardian);
    //     setDoctor(data.doctor);
    //     // ...
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return (
    <div className="pam-container">
      <h1>Pam Form</h1>
      <form>
        <label htmlFor="person">Persona:</label>
        <select id="person" value={person} onChange={(e) => setPerson(e.target.value)}>
          {/* Opciones para el dropdown person */}
        </select>

        <label htmlFor="birthdate">Cumpleaños:</label>
        <input type="date" id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />

        <label htmlFor="deathdate">Deathdate:</label>
        <input type="date" id="deathdate" value={deathdate} onChange={(e) => setDeathdate(e.target.value)} />

        <label htmlFor="guardian">Guardian:</label>
        <select id="guardian" value={guardian} onChange={(e) => setGuardian(e.target.value)}>
          {/* Opciones para el dropdown guardian */}
        </select>

        <label htmlFor="doctor">Doctor:</label>
        <select id="doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
          {/* Opciones para el dropdown doctor */}
        </select>

        <label htmlFor="archdiocese">Arquidiócesis:</label>
        <div className="slide-button">
          <input type="checkbox" id="archdiocese" checked={isArchdioceseActive} onChange={(e) => setIsArchdioceseActive(e.target.checked)} />
          <label htmlFor="archdiocese" className="slide-button-label" />
        </div>
        {isArchdioceseActive && (
          <select id="archdiocese" value={archdiocese} onChange={(e) => setArchdiocese(e.target.value)}>
            {/* Opciones para el dropdown archdiocese */}
          </select>
        )}

        <label htmlFor="decanate">Decanato:</label>
        <div className="slide-button">
          <input type="checkbox" id="decanate" checked={isDecanateActive} onChange={(e) => setIsDecanateActive(e.target.checked)} />
          <label htmlFor="decanate" className="slide-button-label" />
        </div>
        {isDecanateActive && (
          <select id="decanate" value={decanate} onChange={(e) => setDecanate(e.target.value)}>
            {/* Opciones para el dropdown decanate */}
          </select>
        )}

        <label htmlFor="parish">Parish:</label>
        <div className="slide-button">
          <input type="checkbox" id="parish" checked={isParishActive} onChange={(e) => setIsParishActive(e.target.checked)} />
          <label htmlFor="parish" className="slide-button-label" />
        </div>
        {isParishActive && (
          <select id="parish" value={parish} onChange={(e) => setParish(e.target.value)}>
            {/* Opciones para el dropdown parish */}
          </select>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Pam;