import React, { useState, useEffect } from 'react';
import { useFetchPamTestsQuery } from '../store/apis/pamsApi';
import { Button } from 'react-bootstrap';

function NewTest() {
  
const { data: dataTests, isFetching: isFetchingTests } = useFetchPamTestsQuery(1);
  const [data, setData] = useState([]);
  const imageUrl =  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F04%2F02%2F14%2F10%2Ftraffic-light-306386_960_720.png&f=1&nofb=1&ipt=e9dbd2d9544ce8dc17ee426bc31676262c1eab616a038ddbf86b28c3ed13b7ee&ipo=images";
  const HandlePrint = () => {
    window.print();
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
        <h3>Nombre de Prueba: Escala de valoración sociofamiliar de Gijón</h3>
        <h3>Puntaje: 15</h3>
        <br/><br/>
        <h3 style={{ textAlign: "center"}} >Preguntas: </h3>

<p>Situación familiar<br/>
Relaciones y contacto social<br/>
Apoyos red social</p>


<h3 style={{ textAlign: "center"}} >Respuestas: </h3>
<p> Vive con pareja de similar edad. <br/>
Sólo se relaciona con familia/vecinos/otros.<br/>
Recibe apoyo de la familia y/o vecinos.<br/> </p>
        
       </div>
       <img src={imageUrl} alt="Semáforo" style={{ width: '150px', height: 'auto' }} />
      <br/><br/><br/>
      <Button onClick={HandlePrint}>Imprimir</Button>
    </div>
  );
}

export default NewTest;