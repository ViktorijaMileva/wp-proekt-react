import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({component:Component, ...rest}) => {
		const token = localStorage.getItem("token");
		console.log(token);
	return (

		<Route {...rest}
		render={ props=>{

			if (token) {
				console.log("component")
				return <Component { ...props }/>
			}
			else{
				console.log("redirected");
				return <Redirect to= {{
					pathname: '/login',
					state: {
						from: props.location
					}
				}} />
				
			}

		}
	}/>
	)
}
	export default ProtectedRoute; 