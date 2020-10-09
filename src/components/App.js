import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import Terminal from './screens/Terminal';
import Window from './screens/Window';
/**
 *to-do: route to specific tab in user & counter
 */
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/terminal" exact component={Terminal} />
                <Route path="/window" exact component={Window} />
                <Route path="/user" exact component={Window} />
                <Route path="/counters" exact component={Window} />
                <Route component={() => (
                    <Home />
                )} />
            </Switch>
        </Router>
    )
}

export default App;