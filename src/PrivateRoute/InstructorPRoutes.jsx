import React from 'react'
import { Navigate } from 'react-router-dom'

function InstructorPRoutes({ children }) {
    return localStorage.getItem("AuthInstructor") ?children :<Navigate to="/instructor" />
}

export default InstructorPRoutes