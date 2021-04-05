import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import decode from 'jwt-decode';


const ProtectedRoute = ({component:Component, ...rest}) => {
		const token = localStorage.getItem('jwt');
	return (

		<Route {...rest}
		render={ props=>{

			if((jwt != null) && !(decode(jwt).exp < new Date().getTime()/1000)){
				console.log(decode(jwt).exp);	
				return <Component {...props}/>
			}
			else {
				return (
				<Redirect to={{
						pathname:'/login',
						state:{
							from:props.location
					}
				}}/>
				)
			}
		}}/>)}
	export default ProtectedRoute;