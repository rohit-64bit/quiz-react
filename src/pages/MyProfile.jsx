import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Quiz from '../components/Quiz'
import SideBar from '../components/SideBar'
import Header from "../components/Header"
import CategoryContext from '../context/category/categoryContext'

function MyProfile() {
  // getting user details

  const context = useContext(CategoryContext)
  const { getUserProfile, user } = context;
  useEffect(() => {
    getUserProfile("userToken")
  }, [])

  return (
    <>
      <Header />
      <div className='flex'>
        <SideBar />
        <div className='p-10 overflow-y-auto h-[89.5vh] w-screen'>
          <p className='font-medium text-2xl'>MY PROFILE</p>
          <div className='bg-[url("/src/assets/bg/profilebg.jpg")] bg-cover bg-no-repeat flex flex-col justify-between h-[48%] my-10 border-2 shadow-lg rounded-3xl p-7'>
            <div>
              <div className='font-medium text-xl'>{user.name}</div>
              <div className='font-light text-sm'>{user.email}</div>
            </div>
            <div className='flex flex-col justify-between w-[20%] '>
              <div className='flex flex-col'>
                <p className='font-light'>Contact No.</p>
                <div className='font-bold'>{user.contact}</div>
              </div>
              <div className='flex flex-col'>
                <p className='font-light'>DOB</p>
                <div className='font-bold'>{user.dob}</div>
              </div>
            </div>
            <Link to="/editprofile" className='w-max'>
              <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-10 w-36 rounded-md text-center text-white font-medium hover:shadow-lg'>Edit Profile</button>
            </Link>

          </div>


        </div>
      </div>
    </>
  )
}

export default MyProfile