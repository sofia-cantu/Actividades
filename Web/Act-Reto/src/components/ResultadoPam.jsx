import React, { useState, useEffect } from 'react';
import './ResultadoPam.css';
import { useFetchPamTestsQuery } from '../store/apis/pamsApi';
import { Button } from 'react-bootstrap';

function ResultadoPam() {
  
const { data: dataTests, isFetching: isFetchingTests } = useFetchPamTestsQuery(1);
  const [data, setData] = useState([]);

  

  const handleClick = () => {
    window.location.href = '/newTest';
  };

  useEffect(() => {
    if (dataTests) {
      setData(dataTests.pam_tests);
    }
  }, [dataTests]);

  console.log(data);

  return (
    <div className="container">
      <h1>Administrador</h1>
      <a href="/Busqueda">
        <Button>Regresar</Button>
      </a>  
      <div className="user-details">
        <h2></h2>
      </div>
      <div className="pruebas-section">
        <h3>Pruebas de William Smith</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre de Prueba</th>
              <th>Puntaje</th>
              <th>Fecha de la Prueba</th>
            </tr>
          </thead>
          <tbody>
            
              <tr className="primer-prueba">
                <td>Escala de valoración sociofamiliar de Gijón</td>
                <td>15</td>
                <td>2023-06-05</td>
                <td><Button onClick={handleClick} >Resultados</Button></td>
              </tr>
            
          </tbody>
        </table>
      </div>
      <br/>
      <a>

  



      </a>
     </div>
  );
}

export default ResultadoPam;