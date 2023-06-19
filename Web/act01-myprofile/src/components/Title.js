/* import './Title.css'

function Title(title, name){
    return(
    <div className="Title">
        <h1>My profile</h1>
        <h2>Sofía Cantú Talamantes</h2>
    </div> 
    );
}

export default Title;
*/

import './Title.css';
import React from 'react'

function Title(props){  // en lugar de props añades {} y puedes poner los componentes que quieres desplegar
    return (
        <div className = "Title">
            <h1>{props.title}</h1>
            <h2>{props.name}</h2>
            <h2>{props.profession}</h2>
            <h2>{props.city}</h2>
            <h3>{props.description}</h3>
            <h4>{props.skills}</h4>
        </div>  
    );
}

export default Title;