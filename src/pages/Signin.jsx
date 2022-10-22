import React from 'react'
import { Link, Routes } from "react-router-dom"
import bglogin from '../assets/bg/bglogin.svg'
function Signin() {
    return (
        <>

            <div className='flex'>
                <div className='w-[65%]'>
                    <div className='p-16'>
                        <p className='text-4xl font-extralight text-slate-500'>TEST YOU KNOWLEDGE !</p>
                        <p className='mt-2 font-medium text-lg'>Gear Up With Our Quiz.</p>
                    </div>
                    <img src={bglogin} className='h-96 mx-auto' />
                </div>
                    <div className='w-[35%]  p-20 flex flex-col bg-gradient-to-t from-slate-50 to-white'>
                

                        <p className='font-bold text-lg'>Signing In</p>
                        <p className='text-sm mt-1'><Link to="/signup" className='hover:underline text-blue-700'>Sign Up</Link> if you don't have an account.</p>
                        <form action="" className='my-4 flex flex-col gap-3'>
                            <p className='text-xs ml-7 mt-2 text-slate-500'>E-mail ID</p>
                            <input
                                type="email"
                                name="email"
                                className='text-base font-medium px-7 h-14 rounded-3xl shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                            />

                            <p className='text-xs ml-7 mt-2 text-slate-500'>Password</p>
                            <input
                                type="password"
                                name="password"
                                className='text-base font-black px-7 h-14 rounded-3xl shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                            />

                            <div className='flex text-sm mt-1 text-slate-500 justify-between p-2'>
                                <div className='flex'>
                                    <input type="checkbox"
                                        name=""
                                        className='mr-2 h-5 w-5 rounded-full focus:border-blue-500 focus:bg-white  outline-none transition-all duration-200 ease-in-out ' />
                                    Show Password
                                </div>
                                <Link to='/reset-password' className='hover:underline'>Forgotten Password ?</Link>
                            </div>
                            <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-14 rounded-3xl text-center text-white font-medium hover:shadow-lg' type='submit'>Sign In</button>
                        </form>
                
                    </div>
            </div>
        </>
    )
}

export default Signin