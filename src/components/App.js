import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import Terminal from './screens/Terminal';
import User from './screens/User';
import Counter from './screens/Counter';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/terminal" exact component={Terminal} />
                <Route path="/user" exact component={User} />
                <Route path="/counter" exact component={Counter} />
                <Route component={() => (
                    <Home />
                )} />
            </Switch>
        </Router>
    )
}

export default App;