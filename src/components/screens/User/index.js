import './style.css';
import React, { Component } from 'react';

export default class index extends Component {
    constructor () {
        super();
        this.state = {
            user: 'John Doe',
            year: '2020',
            edit: true,
        };
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
                    value={this.state.user} 
                    disabled={this.state.edit}
                    onChange={(input) => this.updateValue(input.target.value.replace(/[0-9*#+]/,''), this.state.year)}
                />
                <input 
                    type="text" 
                    value={this.state.year} 
                    disabled={this.state.edit}
                    onChange={(input) => this.updateValue(this.state.user, input.target.value.replace(/\D/,''))}
                />
                <div className="buttons">
                    <button 
                        id="edit"
                        onClick={() => {
                                this.setState({edit: !edit});
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
