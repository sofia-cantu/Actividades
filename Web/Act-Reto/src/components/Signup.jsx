import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Grid } from '@mui/material';
import axios from 'axios';
import './Signup.css'


const Signup = () => {
  const navigate = useNavigate();
  const urlperson = "http://localhost:3100/api/addPerson";
  const [dataperson, setDataPerson] = useState({
    email: "",
    first_name: "",
    last_name: "",
    gender_id: " ",
    phone: " ",
    country: "",
    state: "",
    city: "",
    address_1: "",
    address_2: "",
    zip_code: ""
  })
  function submit(e) {
    e.preventDefault();
    axios.post(urlperson,{
      email: dataperson.email,
      first_name: dataperson.first_name,
      last_name: dataperson.last_name,
      gender_id: dataperson.gender_id,
      phone: dataperson.phone,
      country: dataperson.country,
      state: dataperson.state,
      city: dataperson.city,
      address_1: dataperson.address_1,
      address_2: dataperson.address_2,
      zip_code: dataperson.zip_code
    })
      .then(res=>{
        console.log(res.dataperson)
      })
  }
  function handle(e) {
    const newdataperson = { ...dataperson }; // Create a new object using spread syntax
    newdataperson[e.target.id] = e.target.value
    setDataPerson(newdataperson)
    console.log(newdataperson)
  }
  ///////////////////// PAM

    const countiresAll = [
        "Argentina",
        "Bolivia",
        "Brasil",
        "Colombia",
        "Chile",
        "Costa Rica",
        "Cuba",
        "Ecuador",
        "El Salvador",
        "Guatemala",
        "Haití",
        "Honduras",
        "Jamaica",
        "México",
        "Nicaragua",
        "Panamá",
        "Paraguay",
        "Perú",
        "Puerto Rico",
        "República Dominicana",
        "Uruguay",
        "Venezuela"
    ]

    const mexicanStates = [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Coahuila",
        "Colima",
        "Durango",
        "Estado de México",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas"
    ];

    const gotoLoginPage = () => navigate("/signin");


    return(
      <> <br/> <br/>
      <div className="container">
      <form onSubmit={(e)=> SubmitEvent(e)}> 
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
           <label htmlFor='first_name'>Nombre(s)</label>
          <input
            type='text'
            id='first_name'
            name='first_name'
            required
            value={dataperson.first_name}
            onChange={(e) => handle(e)}
          />
        </Grid>
        <Grid item xs={6}>  
         <div style={{ textAlign: 'left' }}>
            <label htmlFor="country">País:</label> <br/>
            <select id="country" name="country" style={{ width: '45%' }}  value={dataperson.country}  onChange={(e) => handle(e)}>
              {countiresAll.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
        </div>
        </Grid>
        <Grid item xs={6}>
          <label htmlFor='last_name'>Apellido(s)</label>
          <input
            type='text'
            id='last_name'
            name='last_name'
            value={dataperson.last_name}
            required
            onChange={(e) => handle(e)}
          />
        </Grid>
        <Grid item xs={6}>
        <div style={{ textAlign: 'left' }}> 
        <label htmlFor="state">Estado</label> <br/>
          <select id="state" name="state"  value={dataperson.state}  onChange={(e) => handle(e)}>
            {mexicanStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        </Grid>
         <Grid item xs={6}>
         <div style={{ textAlign: 'left' }}>
         <label htmlFor='city'>Ciudad</label> <br/>
                <input
                  type='text'
                  id='city'
                  name='city'
                  required
                  value={dataperson.city}
                  onChange={(e) => handle(e)}
                />
          </div>
         </Grid>
         <Grid item xs={6}>
         <label htmlFor='email'>Correo electrónico</label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  value={dataperson.email}
                  required
                  onChange={(e) => handle(e)}
                />
    
                <label htmlFor='phone'>Teléfono</label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  value={dataperson.phone}
                  required
                  onChange={(e) => handle(e)}
                />
         </Grid>
         <Grid item xs={6}>
         <div style={{ textAlign: 'left' }}>
         <label htmlFor='address_1'>Calle Address 1</label>
                <input
                  type='text'
                  id='address_1'
                  name='address_1'
                  value={dataperson.address_1}
                  required
                  onChange={(e) => handle(e)}
                />
    
                <label htmlFor='zip_code'>Número(s) ZIP</label>
                <input
                  type='text'
                  id='zip_code'
                  name='zip_code'
                  value={dataperson.zip_code}
                  required
                  onChange={(e) => handle(e)}
                />
          </div>
         </Grid>
         
         <Grid item xs={6}>
         <div style={{ textAlign: 'left' }}>
          
    
                <label htmlFor='address_2'>Colonia Adress 2</label>
                <input
                  type='text'
                  id='address_2'
                  name='address_2'
                  value={dataperson.address_2}
                  required
                  onChange={(e) => handle(e)}
                />
            </div>
         </Grid>
         </Grid>
         <Button variant='outline-success' className='BotonLogin' onClick={submit}>
        Regístrate Persona
      </Button> 
      <p>
        ¿Ya tienes cuenta?{' '}
        <span className='link' onClick={gotoLoginPage}>
          Ingresa
        </span>
      </p>
        </form>
      </div>
      </>  
    );
}    
export default Signup;