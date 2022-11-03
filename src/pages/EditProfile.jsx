import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, Input, InputAdornment } from '@mui/material';
import React from 'react'
import { useState } from 'react';



function EditProfile() {
    // after submisson of this for the id of the previous email will be fetched and  the email will be updated with the recent email
    let [email, setEmail] = useState("rohitpandit9051@gmail.com")
    let [dob, setDob] = useState("07-04-2002")
    let [name, setName] = useState("Rohit Kumar Pandit")
    let [passwsord, setPasswsord] = useState("")
    
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };


    const handleCheck = () => {
        if (isChecked === false) {
            setPasswordType("text")
        } else {
            setPasswordType("password")
        }
    }

    
    return (
        <>
            <div className='p-10 bg-slate-100 w-full h-full'>
                <p className='font-medium text-2xl'>Edit Your Profile</p>

                <form action="" className='my-4 flex flex-col gap-3'>
                    <p className='text-xs ml-7 mt-2 text-slate-500'>Full Name : <strong>{name}</strong></p>



                    <input
                        type="text"
                        name="fullName"
                        className='text-base font-medium px-7 h-14 rounded-3xl shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                        onChange={e => (setName(e.target.value))}
                    />



                    <p className='text-xs ml-7 mt-2 text-slate-500'>E-mail ID : <strong>{email}</strong></p>

                    <input
                        type="email"
                        name="email"
                        className='text-base font-medium px-7 h-14 rounded-3xl shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                        onChange={e => (setEmail(e.target.value))}
                    />

                    <p className='text-xs ml-7 mt-2 text-slate-500'>DOB : <strong>{dob}</strong></p>

                    <input
                        type="date"
                        name="dob"
                        className='text-base font-medium px-7 h-14 rounded-3xl shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out '
                        onChange={e => (setDob(e.target.value))}
                    />

                    <p className='text-xs ml-7 mt-2 text-slate-500'>Password</p>

                    <input
                        type={values.showPassword ? "text" : "password"}
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        }
                        name="password"
                        className='text-base font-black px-7 h-14 rounded-3xl shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out bg-white '
                    />

                    <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-14 rounded-3xl text-center text-white font-medium hover:shadow-lg' type='submit'>SAVE CHANGES</button>
                </form>
            </div>
        </>
    )
}

export default EditProfile