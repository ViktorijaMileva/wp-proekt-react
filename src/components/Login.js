import { render } from '@testing-library/react';
import React, {useState} from 'react';
import { Redirect } from "react-router";


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false,
            showToaster: false
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
            Username: this.state.username,
            Password: this.state.password
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
            if(info.token){
                console.log(info.token);
                localStorage.setItem("token", info.token);
                this.setState({
                    redirect: true,
                    showToaster: false
         });
        } else{
            this.setState({ showToaster: true });
        }
        });

       }

       render(){
           return this.state.redirect ? (
               <Redirect to={{pathname: "/"}} />
           ) : (
         <form>      
            <p className="h4 text-center py-4">Login</p>
            <label for="username">Username </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username..."
              onChange={this.onChange}
            />
            <div></div>
            
            <label for="password">Password </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              onChange={this.onChange}
            />
            <div>
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.submit}
              >
                Submit
                </button>
                </div>

                </form>

           )
       }



    }
    export default Login;
