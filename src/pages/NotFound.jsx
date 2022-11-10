import React from 'react'
import Header from '../components/Header'
import error from "../assets/images/404.svg"
import { Link } from 'react-router-dom'


function NotFound() {
    return (
        <>
        <Header details="404 page not found" />
        <div className='p-20 flex flex-col gap-10'>
        <img src={error} alt="404" className='mx-auto w-[40%] ' />
        <Link to="/" className='mx-auto px-5 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-500 hover:translate-y-1'>RETURN TO HOME</Link>
        </div>
        
        </>
    )
}

export default NotFound