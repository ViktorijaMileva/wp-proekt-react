import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="input-div">
        <form>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email.."/>

        <label for="password">Password</label>
        <input className="password-input" type="password" id="password" name="password" placeholder="Enter your password.."/>
  
        <input type="submit" value="Submit"/>
        </form>
            </div>
            
        )
    }
}
export default Login;