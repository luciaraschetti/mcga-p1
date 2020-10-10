import './style.css';
import React, { Component } from 'react';
import Typist from 'react-typist';

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            name: '',
        };
    }

    show() {
        this.setState({user: 'user@parcial-01:'});
    }

    updateValue = (name) => {
        this.setState({name: name});
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.show();
            this.nameInput.focus();
        }, 4000);
    }

    render() {
        return (
            <div className="terminal">
                <div className="toolbar">
                    <p>user@parcial-01:~</p>
                </div>
                <div className="terminal-body">
                    <div className="typed">
                    <p className="text">Welcome to Parcial-01!</p>
                    <Typist 
                        stdTypingDelay={15} 
                        startDelay={500} 
                        cursor={ 
                                    {
                                        element: '❚',
                                        hideWhenDone: true, 
                                        hideWhenDoneDelay: 0, 
                                    } 
                                }
                    >
                        <span className="text">Please enter your first and last name...</span>
                    </Typist>
                    <span className="text user">{this.state.user}</span> 
                    <input 
                        className="user-name" 
                        type="text"
                        ref={(input) => {this.nameInput = input;}} 
                        value={this.state.name}
                        onChange={(input) => this.updateValue(input.target.value)}
                    />
                    </div>
                </div>
            </div>
        )
    }
}

export default index;
