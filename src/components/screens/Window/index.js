import './style.css';
import React, { Component } from 'react';
import User from '../User';
import Counters from '../Counters';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: false
        };
    }

    render() {
        return (
            <>
                <div className="window">
                    <div className="toolbar">
                        <p>App</p>
                    </div>
                    <div className="window-body">
                        <div className="tabs">
                            <div className="buttons">
                                <button 
                                    onClick={() => {
                                        this.setState({tab: false});
                                    }}
                                >
                                    User
                                </button>
                                <button
                                    onClick={() => {
                                        this.setState({tab: true});
                                    }}
                                >
                                    Counters
                                </button>
                            </div>
                        </div>
                        {this.state.tab ? <Counters /> : <User />}
                    </div>
                </div>
            </>
        )
    }
}