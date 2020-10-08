import './style.css';
import React, { Component } from 'react';

export class index extends Component {
    render() {
        return (
            <div className="terminal">
                <div className="toolbar">
                    <p>user@parcial-01:~</p>
                </div>
                <div className="terminal-body">
                    <p>Welcome to Parcial-01!</p>
                </div>
            </div>
        )
    }
}

export default index
