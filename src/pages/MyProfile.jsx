import React from 'react'
import { Link } from 'react-router-dom'
import Quiz from '../components/Quiz'
import SideBar from '../components/SideBar'

function MyProfile() {
  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='p-10 overflow-y-auto h-[89.5vh] w-screen'>
          <p className='font-medium text-2xl'>MY PROFILE</p>
          <div className='bg-[url("/src/assets/bg/profilebg.jpg")] bg-cover bg-no-repeat flex flex-col justify-between h-[48%] my-10 border-2 shadow-lg rounded-3xl p-7'>
            <div>
              <div className='font-medium text-xl'>Quiz taker Name</div>
              <div className='font-light text-sm'>quiztaker@gmail.com</div>
            </div>
            <div className='flex justify-between w-[20%] '>
              <div className='flex flex-col'>
                <p className='font-light'>Quiz Taken</p>
                <div className='font-bold'>17</div>
              </div>
              <div className='flex flex-col'>
                <p className='font-light'>Scoring Average</p>
                <div className='font-bold'>4.5</div>
              </div>
            </div>
            <Link to="/quizes" className='w-max'>
              <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-10 w-36 rounded-md text-center text-white font-medium hover:shadow-lg'>Start New Quiz</button>
            </Link>

          </div>


        </div>
      </div>
    </>
  )
}

export default MyProfile