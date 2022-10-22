import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <div className='flex p-5 justify-between bg-slate-100 outline outline-1 outline-slate-300 '>
                <Link to="/" className='font-bold text-xl my-auto'>TAKE YOUR QUIZ</Link>

                <div className='flex gap-10 my-auto'>
                    {/* <div className='flex gap-5 my-auto  '>
                        <Link to="/" className='hover:translate-y-1 transition-all ease-in-out'>HOME</Link>
                        <Link to="/" className='hover:translate-y-1 transition-all ease-in-out'>QUIZES</Link>
                        <Link to="/" className='hover:translate-y-1 transition-all ease-in-out'>PROFILE</Link>
                        <Link to="/" className='hover:translate-y-1 transition-all ease-in-out'>ABOUT</Link>
                    </div> */}
                    <div className="flex gap-5">
                        <Link to="/signup">

                            <button className='bg-white transition-all ease-in-out duration-200 h-9 w-28 rounded-md text-center outline outline-1 outline-slate-300 font-medium hover:shadow-lg text-blue-800'>SIGN UP</button>
                        </Link>
                        <Link to="/signin">

                            <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-9 w-28 rounded-md text-center text-white font-medium hover:shadow-lg'>SIGN IN</button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header