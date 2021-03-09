import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import photo from '../photos/home-photo.jpg'
import Login from './Login.js';
import Food from './Food.js'; 
import '../style/Food.css';
import '../style/Login.css';

class Home extends React.Component{
    constructor(props){
        super(props);
      }

    render(){
       
        return(
          <div className="home-div">
            <h2>Welcome to our shop</h2>
            <div>
              <img src={photo}/>
            </div>
            <div className="login-button">
              <Link to="/login" className="login-link-button">Login</Link>
            </div>
          </div>
        )

        }
}
export default Home;