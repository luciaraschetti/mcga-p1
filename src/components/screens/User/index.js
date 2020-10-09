import './style.css';
import React from 'react';

function index() {
    return (
        <>
            <input type="text" value="John Doe"></input>
            <input type="text" value="2020"></input>
            <div className="buttons">
                <button id="edit">Edit</button>
                <button id="counter">+</button>
            </div>
        </>                
    )
}

export default index;
