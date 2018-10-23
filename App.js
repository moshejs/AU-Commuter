import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";

import logo from './logo.svg';
import './App.css';


import { Search } from "./Components/Search.jsx"




class App extends Component {
  render() {

    return (

        <Router>
          <Switch>
            <Route path="/Beta/AdelphiCommuter" component={Search} exact />
          </Switch>
        </Router>



    );
  }
}

export default App;
//export Hello;
