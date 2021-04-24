import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Food from './components/Food.js';
import Animal from './components/Animal.js';
import Merchandise from './components/Merchandise.js';
import Customer from './components/Customer.js';
import Login from './components/Login.js';
import './style/Home.css';
import './style/NavBar.css';
import './style/Food.css'
import './style/Animal.css';
import './style/Merchandise.css';
import './style/Customer.css';
import './style/Login.css';
import ProtectedRoute from './components/ProtectedRoute';

function App(){

  return (

   <div className="App">

    <NavBar/>

    <Route exact path="/">
    <Home />
    </Route>

    <ProtectedRoute path="/food" component={Food} />

    <ProtectedRoute path="/animals" component={Animal} />

    <ProtectedRoute path="/merchandise" component={Merchandise} />

    <ProtectedRoute path="/customer" component={Customer} />
     
    <Route path="/login">
      <Login/>
    </Route>

    </div> 
    
  );
}

export default App;
