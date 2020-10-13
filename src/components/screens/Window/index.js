import './style.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import User from '../User';
import Counters from '../Counters';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: this.props.tab
        };
    }

    render() {
        const { location } = this.props;
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
                        {
                            this.state.tab ? <Counters /> : 
                            <User user={ (location.state) ? location.state.detail : ''}/>
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(index);