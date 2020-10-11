import './Counter.css';
import React from 'react';

function Counter(props) {
    return (
        <div className="counter" key={props.id} date={props.date}>
            <div className="buttons">
                <div className="controls">
                    <button>-</button>
                    <span>10</span>
                    <button>+</button>
                </div>
                <div className="delete">
                    <button>Delete</button>
                </div>
            </div>
            <div className="details">
                <p>Created:</p>
                <p>{props.date}</p>
                <p>Updated:</p>
                <p>10/10/10 10:00:00 PM</p>
            </div>
        </div>
    )
}

export default Counter;
