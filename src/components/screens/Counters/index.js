import './style.css';
import React from 'react';
import Counter from './Counter/Counter';

function index() {
    return (
        <div className="counters">
            <p className="title">Counters</p>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
}

export default index
