import React from 'react';
import photo from '../photos/home-photo.jpg'
import '../style/Food.css';
import '../style/Login.css';
import {Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from '../sliders/ImageSlider.js';
import { SliderData } from '../sliders/SliderData';

class Home extends React.Component{

    render(){
       
        return(
          
          <div className="home-div">
            <h2>Welcome to our shop</h2>
            <div className="img-div">
              <img src={photo} alt="logo" />
            </div>
            <div className="login-button">
              <Link to='/login' className="btn btn-primary btn-lg">Login</Link>
            </div>
            <div>
            <ImageSlider slides={SliderData} />
            </div>
          </div>
        )

        }
}
export default Home;