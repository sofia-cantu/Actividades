import './Counter.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import React from 'react'


function Counter() {
    const [number, setNumber] = useState(1);

    const handleClick = () => {
        setNumber(number + 1);
        console.log(number);
    }



    const handleClickBackwards = () => {
        setNumber(number - 1);
        console.log(number);
    }

    return (
        <div className="Counter">
            <h1>Counter: {number}</h1>
            <Button className="ButtonUp" variant="sucess" size="lg" onClick = {handleClick}> UP </Button>{' '}
            <Button className="ButtonDown" variant="sucess" size="lg" onClick = {handleClickBackwards}> DOWN </Button>{' '}
        </div>

    );
}
export default Counter;