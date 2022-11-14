import React from 'react'
import { Navigate } from 'react-router-dom'

function UserPRoute({ children }) {
    return localStorage.getItem("userToken") ?  children : <Navigate to="/signup" />
}

export default UserPRoute