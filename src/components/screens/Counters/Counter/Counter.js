import './Counter.css';
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            updated: this.props.date,
        };
    }

    decCount() {
        let newValue = this.state.count;
        this.setState({
            count: (newValue - 1),
            updated: this.props.getDate()
        });
    }

    incCount() {
        let newValue = this.state.count;
        this.setState({
            count: (newValue + 1),
            updated: this.props.getDate()
        });
    }

    render() {
        return (
            <div className="counter" key={this.props.id} date={this.props.date}>
                <div className="buttons">
                    <div className="controls">
                        <button
                            onClick={() => this.decCount()}
                        >-</button>
                        <span>{this.state.count}</span>
                        <button
                            onClick={() => this.incCount()}
                        >+</button>
                    </div>
                    <div className="delete">
                        <button onClick={this.props.delCounter}>
                        Delete
                        </button>
                    </div>
                </div>
                <div className="details">
                    <p>Created:</p>
                    <p>{this.props.date}</p>
                    <p>Updated:</p>
                    <p>{this.state.updated}</p>
                </div>
            </div>
        )
    }
}

