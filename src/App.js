import React from 'react';
import logo from './logo.svg';
import './App.css';
import Crasole from './Carsole'
import Menu from './Menu'
import Mantra from './Mantra'
import Story from './Stories'
import Buzz from './Business'
import About from './About'
import Contact from './Contact'
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Crasole />
      <Menu />
      <Switch>
        <Route exact path='/' component={Mantra}/>
        <Route exact path='/story' component={Story}/>
        <Route exact path='/business' component={Buzz}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
