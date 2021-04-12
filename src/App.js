import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Food from './components/Food.js';
import Animal from './components/Animal.js';
import Merchandise from './components/Merchandise.js';
import Customer from './components/Customer.js';
import Login from './components/Login.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import './style/Home.css';
import './style/NavBar.css';
import './style/Food.css'
import './style/Animal.css';
import './style/Merchandise.css';
import './style/Customer.css';
import './style/Login.css';
import React, {useState} from 'react';

function App(){

  

  return (

   <div className="App">

    <NavBar/>

    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/food">
      <Food/>
    </Route>

    <Route path="/animals">
      <Animal/>
    </Route>

    <Route path="/merchandise">
      <Merchandise/>
    </Route>

    <Route path="/customer">
      <Customer/>
    </Route>

    <Route path="/login">
      <Login/>
    </Route>

    </div> 
    
  );
}

export default App;
