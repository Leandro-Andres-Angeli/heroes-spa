import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
const PrivateRoute = ({isAuthenticated,component : Component,...rest}) => {
    const {location:{pathname}} = rest;
   
    localStorage.setItem("lastPath",pathname)
  return (
    <Route  {...rest} component={(props)=>
       (isAuthenticated) ? <Component {...props}></Component> : (<Redirect to="/login"></Redirect>) 
    }></Route>
  )
}
PrivateRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}
export default PrivateRoute