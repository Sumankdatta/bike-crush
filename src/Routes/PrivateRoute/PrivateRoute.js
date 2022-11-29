import React, { useContext } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLoaderData();

    if(loading){
        return <progress className="progress w-56 text-center"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}}replace></Navigate>

};

export default PrivateRoute;