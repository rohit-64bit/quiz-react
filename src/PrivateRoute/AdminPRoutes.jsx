import React from 'react'
import { Navigate } from 'react-router-dom'

function AdminPRoutes({ children }) {
    return localStorage.getItem("adminToken") ? children : <Navigate to="/admin" />
}

export default AdminPRoutes