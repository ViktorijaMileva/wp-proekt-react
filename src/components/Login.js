import { Redirect } from "react-router";
import React from 'react';
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
                "Content-Type": "application/json"
            }
        })
        .then(response => response.text())
        .then(info => {
                console.log(info);
                localStorage.setItem("token", "Bearer " + info);
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
              id="username"
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
              id="password"
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
                id="submit-buttton"
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
