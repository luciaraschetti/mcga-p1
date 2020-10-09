import './style.css';
import React from 'react';

function index() {
    return (
        <div className="window">
            <div className="toolbar">
                <p>App</p>
            </div>
            <div className="window-body">
                <div className="tabs">
                    <div className="buttons">
                        <button>User</button>
                        <button>Counters</button>
                    </div>
                </div>
                <input type="text" value="John Doe"></input>
                <input type="text" value="2020"></input>
                <div className="buttons">
                    <button id="edit">Edit</button>
                    <button id="counter">+</button>
                </div>
            </div>
        </div>
    )
}

export default index;
