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

    getDate() {
        let date = new Date(Date.now());
        return date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    addCounter = () => {
        let counterCards = this.state.counters.concat(<Counter 
                                                            date={this.getDate()} 
                                                            key={this.state.counters.length} 
                                                            delCounter={this.delCounter} 
                                                            getDate={this.getDate}
                                                    />)
        this.setState({counters: counterCards});
    }

    delCounter(id) {
        ////
    }

    render() {
        return (
            <div className="counters">
                <p className="title">Counters</p>
                <div className="buttons">
                    <button 
                        id="counter"
                        onClick={() => this.addCounter()}
                    >+</button>
                </div>
                {this.state.counters}
            </div>
        )
    }
}
