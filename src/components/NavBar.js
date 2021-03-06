import React from 'react';
import '../style/Merchandise.css';
import '../style/Food.css';
import '../style/Home.css';
import '../style/Customer.css';
import '../style/Login.css';
import { Link } from 'react-router-dom';
import Logout from './Logout';

class NavBar extends React.Component{

    render(){
      
        return(

          <div className="nav-bar">
          <div className="home"><Link to='/' className="home-link">Home</Link></div>
          <div className="food"><Link to='/food' className="food-link">Food</Link></div>
          <div className="animal"><Link to='/animals' className="animal-link">Animals</Link></div>
          <div className="customers"><Link to='/customer' className="customer-link">Customer</Link></div>
          <div className="merchandise"><Link to='/merchandise' className="merchandise-link">Merchandise</Link></div>
          <div className="login"><Link to='/login' className="login-link">Login</Link></div>
          <div className="logout"><Logout/></div>
        </div>
        
        );
        
    };

  }

export default NavBar;