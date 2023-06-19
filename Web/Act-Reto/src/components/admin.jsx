import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import { Grid } from '@mui/material';



const admin = () => {
 

  return(
    <>
    <h1>Administrador</h1> <br/>
    <h2>BÚSQUEDA DE USUARIOS ADULTOS MAYORES</h2>
    <div className="container">
      <div className="search-bar">
      <h3>¿A quién deseas buscar?</h3>
      <input type="text" placeholder="Buscar" style={{ width: '79%' }} />
        <button type="submit">Buscar</button>
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
      <Grid item xs={4}> 
        <div className="column">Nombre</div>
      </Grid>
      <Grid item xs={4}> 
        <div className="column">Decanato</div>
      </Grid>
      <Grid item xs={4}> 
        <div className="column">Última prueba realizada</div>
      </Grid>
        
       </Grid>
    </div>
    </>
  )
};
export default admin;