import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import Login from '../../pages/Login';

const ProtectedUserLogged = () => {

    const {token} = useSelector(store => store.userInfo)

    if(token){
        return <Outlet/>;
    }else {
        return <Navigate to="/login"/>
    }

}

export default ProtectedUserLogged