import { render } from '@testing-library/react';
import React, {useState} from 'react';
import { Redirect } from "react-router";
import button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false,
        };
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);


    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.username);
    }

    submit(e){
        var obj = {
            username: this.state.username,
            password: this.state.password
        };

        fetch("/login", {
            method: "post",
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(info => {
                console.log(info.jwt);
                localStorage.setItem("token", info.jwt);
                this.setState({
                    redirect: true,
         });
        });

       }

       render(){
           return this.state.redirect ? (
               <Redirect to={{pathname: "/"}} />
           ) : (
         <form className="container">      
            <p className="h4 text-center py-4">Login</p>
            <div className="row">
            <div className="form-group col-sm">
            <label for="username">Username </label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username..."
              onChange={this.onChange}
            />
            </div>

            <div className="form-group col-sm">
            <label for="password">Password </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password..."
              onChange={this.onChange}
            />
            </div>
            <div className="form-group col-sm">
              <button
                class="btn btn-primary"
                type="button"
                onClick={this.submit}
              >
                Submit
                </button>
                </div>
            </div>


                </form>

           )
       }



    }
    export default Login;
