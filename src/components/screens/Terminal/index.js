import './style.css';
import React, { Component } from 'react';
import Typist from 'react-typist';

export class index extends Component {
    render() {
        return (
            <div className="terminal">
                <div className="toolbar">
                    <p>user@parcial-01:~</p>
                </div>
                <div className="terminal-body">
                    <Typist className="typed" stdTypingDelay={15} startDelay={500}>
                        <span className="text">Welcome to Parcial-01!</span>
                        <span className="text">Please enter your first and last name...</span>
                    </Typist>
                </div>
            </div>
        )
    }
}

export default index
