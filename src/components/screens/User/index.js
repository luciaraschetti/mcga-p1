import './style.css';
import React, { Component } from 'react';

export default class index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            user: this.props.user,
            year: '2020',
            edit: true,
        };
    }

    editState = (isValid) => {
        if(isValid) {
            let edit = this.state.edit;
            this.setState({edit: !edit});
        }
    }

    validateInput = () => {
        let isValid = true;

        if(!/^[a-zA-Z\s]*$/g.test(this.userInput.value)) {
            this.userInput.value = '';
            this.userInput.placeholder = 'Only letters allowed';
            isValid = false;
        }

        if(!/^[0-9]*$/g.test(this.yearInput.value)) {
            this.yearInput.value = '';
            this.yearInput.placeholder = 'Only numbers allowed';
            isValid = false;
        }
        
        this.editState(isValid);
    }

    updateValue = (user, year) => {
        this.setState({
            user: user,
            year: year
        });
    }

    render() {
        let edit = this.state.edit;   
        return (
            <>
                <p className="title">User</p>
                <input 
                    type="text" 
                    ref={(input) => {this.userInput = input;}}
                    value={this.state.user} 
                    disabled={this.state.edit}
                    onChange={(input) => this.updateValue(input.target.value, this.state.year)}
                />
                <input 
                    type="text" 
                    ref={(input) => {this.yearInput = input;}}
                    value={this.state.year} 
                    disabled={this.state.edit}
                    onChange={(input) => this.updateValue(this.state.user, input.target.value)}
                />
                <div className="buttons">
                    <button 
                        id="edit"
                        onClick={() => {
                                if(!edit) {
                                    this.validateInput();
                                } else {
                                    this.editState(true);
                                }
                            }
                        }
                    >
                        {edit ? 'Edit' : 'Save'}
                    </button>
                </div>
            </>
        )
    }
}
