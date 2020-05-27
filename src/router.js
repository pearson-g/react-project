import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import { User } from './pages/user';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

function router() {
    return (
        <Router>
            <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/user" component={User}></Route>
        </Switch>

        </Router>
    )
}

export default router;

