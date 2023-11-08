import React, { useEffect } from 'react'
import { selectLoggedInUser, signOutAsync } from '../authSlice'
import { Navigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';

function Logout ()  {
    const dispatch =useDispatch();
    const user=useSelector(selectLoggedInUser)
    useEffect(() =>{
        dispatch(signOutAsync())
    })
  return (
    <>
     {!user && <Navigate to="/login" replace={true}></Navigate>}
    </>
  )
}

export default Logout