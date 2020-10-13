import './style.css';
import React, { Component } from 'react';
import Counter from './Counter/Counter';


export default class index extends Component {
    constructor() {
        super();
        this.state = {
            counters: [],
            counterId: -1,
        };
    }

    getDate() {
        let date = new Date(Date.now());
        return date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    getId = () => {
        let newValue = this.state.counterId;
        this.setState({counterId: (newValue + 1)});
        return newValue;
    }

    addCounter = () => {
        let counterCards = this.state.counters;
        counterCards.push({
            id: this.getId(),
            date: this.getDate(),
        });
        this.setState({counters: counterCards});
    }

    delCounter = (counter) => {
        let newList = this.state.counters;
        newList.splice(counter, 1);
        this.setState({ counters: newList});
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
                {
                    this.state.counters.map((counter, i) => (
                        <Counter 
                            date={counter.date} 
                            key={i}
                            delCounter={() => this.delCounter(i)} 
                            getDate={this.getDate}
                        />
                    ))
                }
            </div>
        )
    }
}
