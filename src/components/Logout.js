import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Logout extends Component{
    state = {
        navigate: false,
    };

    logout = () =>{
        localStorage.clear("token");
        this.setState({navigate: true});
    }

    render(){
        const { navigate } = this.state;
        if (navigate) {
            return <Redirect to="/" push={true}/>
        }
        return(
        <Link className="logout-link" onClick={this.logout}>Log out</Link>
        
       );
    }
}
export default Logout;