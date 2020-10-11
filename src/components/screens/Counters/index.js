import './style.css';
import React, { Component } from 'react';
import Counter from './Counter/Counter';


export default class index extends Component {
    constructor() {
        super();
        this.state = {
            counters: [],
        };
    }

    addCounter() {
        let counterCards = this.state.counters.concat(<Counter />);
        this.setState({counters: counterCards});
    }

    delCounter() {
        ///delete counter card
    }

    render() {
        return (
            <div className="counters">
                <p className="title">Counters</p>
                <div className="buttons">
                    <button 
                        id="counter"
                        onClick={() => {this.addCounter()}}
                    >+</button>
                </div>
                {this.state.counters}
            </div>
        )
    }
}
