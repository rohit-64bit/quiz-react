import React from 'react'

function AdminLogin() {
    // on auth success it will redirect to the admin UI
  return (
    <>
    <div className='w-screen'>
        <p className='font-bold text-xl text-center my-10 '>ADMIN LOGIN</p>
        <form action="" className='flex flex-col w-[60%] mx-auto my-10 gap-5'>
            <input type="email" placeholder='email for admin' className='bg-slate-50 h-14 w-auto rounded-full shadow-lg border-2 font-medium px-10 text-lg' />
            <input type="password" placeholder='password' className='bg-slate-50 h-14 w-auto rounded-full shadow-lg border-2 font-medium px-10 text-lg' />
            <button type='submit' className='bg-slate-700 text-lg font-bold text-white h-14 w-auto shadow-lg rounded-full hover:bg-slate-800 transition-all ease-in-out duration-700 '>LOGIN</button>
        </form>
    </div>
    </>
  )
}

export default AdminLogin