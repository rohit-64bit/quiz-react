import React from 'react'
import {Link} from 'react-router-dom'
import bgrp from '../assets/bg/bgrp.svg'
import Header from "../components/Header"

function ResetPassword() {
  return (
    <>
    <Header/>
            <div className='flex'>
                <div className='w-[65%]'>
                    <div className='p-16'>
                        <p className='text-4xl font-extralight text-slate-500'>TEST YOU KNOWLEDGE !</p>
                        <p className='mt-2 font-medium text-lg'>Gear Up With Our Quiz.</p>
                    </div>
                    <img src={bgrp} alt="" className='h-96 mx-auto' />
                </div>
                    <div className='w-[35%]  p-20 flex flex-col bg-gradient-to-t from-slate-50 to-white'>
                

                        <p className='font-bold text-lg'>Reset Your Password</p>
                        <p className='text-sm mt-1'><Link to="/signup" className='hover:underline text-blue-700'>Sign Up</Link> if you don't have an account.</p>
                        <form action="" className='my-4 flex flex-col gap-3'>
                            <p className='text-xs ml-7 mt-2 text-slate-500'>E-mail ID</p>
                            <input
                                type="email"
                                name="email"
                                placeholder='Send a reset link...'
                                className='text-base font-medium px-7 h-14 rounded-3xl shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                            />

                            <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-14 rounded-3xl text-center text-white font-medium hover:shadow-lg mt-10' type='submit'>Send Reset Link</button>
                        </form>
                
                    </div>
            </div>
        </>
  )
}

export default ResetPassword