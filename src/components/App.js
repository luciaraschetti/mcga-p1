import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import Terminal from './screens/Terminal';
import Window from './screens/Window';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/terminal" component={Terminal} />
                <Route path="/window" component={Window} />
                <Route path="/user" component={Window} />
                <Route path="/counters" 
                    render={(props) => (
                    <Window {...props} tab={true} />
                    )}
                />
                <Route component={() => (
                    <Window />
                )} />
            </Switch>
        </Router>
    )
}

export default App;