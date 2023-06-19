import React, { useState, useEffect } from 'react';
import './Busqueda.css';
import { useFetchPanQuery } from '../store/apis/personApi';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

function Busqueda() {

  const { data: dataPan, isFetching: PanIsFetching } = useFetchPanQuery();
  const [ pan, setPan ] = useState([]);

  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (dataPan){
      setUsuarios(dataPan.persons);
      setTablaUsuarios(dataPan.persons);
    }
  }, [dataPan])
  console.log(dataPan);

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const navigateResultados = (pam) => {
    navigate (`/ResultadoPam/${pam.pam_id}`);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (elemento.first_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }

  //if(userData == []) return null;

  return (
    <>
    <div className="table">
      <div className="busqueda"> <br/>
        <input type="text" value={busqueda} placeholder="Buscar..." onChange={handleChange} style={{ width: '1000px', height: 'auto' }}/>
      </div>
      <Table striped bordered hover>
        <thead className='PanHeader'>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Apellido
            </th>
            <th>
              Numero telefonico
            </th>
            <th>
              Correo Electronico
            </th>
            <th>
              Nombre del grupo
            </th>
            <th>
              Tests
            </th>
          </tr>
        </thead>
        <tbody>
          {!PanIsFetching &&
          usuarios.map((pam) => (
            <tr className='PamsDetail' key={pam.pam_id}>
              <td>{pam.first_name}</td>
              <td>{pam.last_name}</td>
              <td>{pam.phone}</td>
              <td>{pam.email}</td>
              <td>{pam.group_name}</td>
              <td>
                <Button 
                variant='success' 
                onClick={() => 
                  navigateResultados(
                    {
                      pam_id: pam.pam_id,
                      person_id: pam.person_id,
                      birth_date: pam.birth_date,
                      deceased_date: pam.deceased_date,
                      guardian_id: pam.guardian_id,
                      doctor_id: pam.doctor_id,
                      belongs_to_archdiocese: pam.belongs_to_archdiocese,
                      group_id: pam.group_id
                    }
                  )
                }>

                </Button>
              </td>
            </tr> 
          ))
          }
        </tbody>
      </Table>
    </div>

    </>
  );
}

export default Busqueda;
