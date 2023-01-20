import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import bglogin from '../assets/bg/bglogin.svg'
import SERVER_URL from '../services/Helper';



function InstructorLogin() {

    // on auth success it will redirect to the admin UI

    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })


    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch(`${SERVER_URL}/api/auth/instructor/authinstructor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        if (json.authtoken != undefined) {
            localStorage.setItem("AuthInstructor", json.authtoken);
            navigate("/instructor/home");
        }

        console.log(json);



    }
    let onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>

            <Header />
            <div className='flex'>
                <div className='w-[65%]'>
                    <div className='p-16'>
                        <p className='text-4xl font-extralight text-slate-500'>INSTRUCTOR LOGIN</p>
                        <p className='mt-2 font-medium text-lg'>Welcome Back Instructor</p>
                    </div>
                    <img src={bglogin} className='h-96 mx-auto' />
                </div>
                <div className='w-[35%]  p-20 flex flex-col bg-gradient-to-t from-slate-50 to-white'>


                    <p className='font-bold text-lg'>INSTRCTOR LOGIN</p>
                    <form onSubmit={handleLogin} className='my-4 flex flex-col gap-3'>
                        <p className='text-xs ml-7 mt-2 text-slate-500'>E-mail ID</p>
                        <input
                            type="email"
                            name="email"
                            onChange={onChange}
                            value={credentials.email}
                            className='text-base font-medium px-7 h-14 rounded-3xl shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                        />

                        <p className='text-xs ml-7 mt-2 text-slate-500'>Password</p>
                        <input
                            type="password"
                            name="password"
                            onChange={onChange}
                            value={credentials.password}
                            className='text-base font-black px-7 h-14 rounded-3xl shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                        />

                        <div className='flex text-sm mt-1 text-slate-500 justify-between p-2'>
                            If You forgot the password please contact admin.

                        </div>
                        <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-14 rounded-3xl text-center text-white font-medium hover:shadow-lg' type='submit'>Log In</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default InstructorLogin