import './style.css';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Typist from 'react-typist';
import Window from '../Window';

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

    enterPressed = (e) => {
        let code = e.keyCode || e.which;
        if(code === 13) {
            this.props.history.push({
                pathname: '/window',
                state: {detail: this.state.name}
            });
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.show();
            this.nameInput.focus();
        }, 5100);
    }

    render() {
        return (
            <>  
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
                            <span className="text">Please write your first and last name & press Enter</span>
                        </Typist>
                        <span className="text user">{this.state.user}</span> 
                        <input 
                            className="user-name" 
                            type="text"
                            ref={(input) => {this.nameInput = input;}} 
                            value={this.state.name}
                            onChange={(input) => this.updateValue(input.target.value)}
                            onKeyPress={this.enterPressed.bind(this)}
                        />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(index);
