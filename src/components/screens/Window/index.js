import './style.css';
import React from 'react';
import User from '../User';

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
                <User />
            </div>
        </div>
    )
}

export default index;