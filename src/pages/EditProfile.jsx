import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, Input, InputAdornment } from '@mui/material';
import { data } from 'autoprefixer';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Header from "../components/Header"
import CategoryContext from '../context/category/categoryContext';
import SERVER_URL from '../services/Helper';


function EditProfile() {

  const context = useContext(CategoryContext)
  const { getUserProfile, user } = context;


  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const [credentials, setCredentials] = useState({
    name: "",
    dob: "",
    contact: ""
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  let onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  // Edit a Note
  const editProfile = async (id) => {
    // API Call 
    const response = await fetch(`${SERVER_URL}/api/auth/user/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("userToken")
      },
      body: JSON.stringify(credentials)
    });
    const json = await response.json();

  }
  const handleEdit = () => {
    // e.preventDefault()
    editProfile(user._id)
  }
  console.log(credentials);

  const handleCheck = () => {
    if (isChecked === false) {
      setPasswordType("text")
    } else {
      setPasswordType("password")
    }
  }

  useEffect(() => {
    getUserProfile("userToken")
  }, [])


  return (
    <>
      <Header />
      <div className='p-10 bg-slate-100 w-full h-full'>
        <p className='font-medium text-2xl'>Edit Your Profile | User ID :{user._id}</p>
        <p className='text-xs ml-7 mt-2 text-slate-500'>E-mail ID : <strong>{user.email}</strong> can't be changed</p>
        <form action="" className='my-4 flex flex-col gap-3'>
          <p className='text-xs ml-7 mt-2 text-slate-500'>Full Name : <strong>{user.name}</strong></p>



          <input
            type="text"
            name="name"
            className='text-base font-medium px-7 h-14  shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out bg-white'
            onChange={onChange}
          />

          <p className='text-xs ml-7 mt-2 text-slate-500'>DOB : <strong>{user.dob}</strong></p>

          <input
            type="date"
            name="dob"
            className='text-base font-medium px-7 h-14  shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out bg-white'
            onChange={onChange}
          />
          <p className='text-xs ml-7 mt-2 text-slate-500'>Contact : <strong>{user.contact}</strong></p>

          <input
            type="text"
            name="contact"
            className='text-base font-medium px-7 h-14  shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out bg-white'
            onChange={onChange}
          />

          {/* <p className='text-xs ml-7 mt-2 text-slate-500'>Password</p>

          <Input
            type={values.showPassword ? "text" : "password"}
            onChange={onChange}
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
            className='text-base font-medium px-7 h-14  shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out bg-white'
          /> */}
          <br />
          <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-14 text-center text-white font-medium hover:shadow-lg' type='submit' onClick={handleEdit}>SAVE CHANGES</button>
        </form>
      </div>
    </>
  )
}

export default EditProfile