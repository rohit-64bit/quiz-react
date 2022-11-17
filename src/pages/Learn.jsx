import React, { useContext, useEffect } from 'react'
import SideBar from '../components/SideBar'
import imgSample from "../assets/code1.jpg"
import Header from "../components/Header"
import { Link } from 'react-router-dom'
import CategoryContext from '../context/category/categoryContext'

function Learn() {
  // getting all categories
  const context = useContext(CategoryContext)
  const { videos, getVideoDetails } = context;

  useEffect(() => {
    getVideoDetails("userToken");
  }, [])


  return (
    <>
      <Header details="LEARN" />
      <div className='flex'>
        <SideBar />
        <div className='p-10 overflow-y-auto grid grid-cols-4 gap-8 h-[89.5vh] w-screen'>
          {videos.map((options) => {
            return (
              
                <div key={options._id} className='flex flex-col gap-4 rounded-lg shadow-sm shadow-slate-400 border-[1px] h-max w-72 justify-between bg-slate-50 transition-all ease-in-out duration-500'>


                  <img src={options.imageLink} className="w-auto rounded-t-lg" alt="" />
                  <div className='px-5'>
                    <p className='font-bold text-xl'>{options.title}</p>
                    <p className='text-sm'>{options.description}</p>
                  </div>
                  <Link to='/watchvideo' state={{ options: options }} className='' >
                    <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-10 w-72 rounded-b-lg text-center text-white font-medium hover:shadow-lg'>
                      WATCH VIDEO
                    </button>
                  </Link>
                </div>
              
            )
          })}



        </div>

      </div>
    </>
  )
}

export default Learn