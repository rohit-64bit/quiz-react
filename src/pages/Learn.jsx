import React, { useContext, useEffect } from 'react'
import SideBar from '../components/SideBar'
import imgSample from "../assets/code1.jpg"
import Header from "../components/Header"
import { Link } from 'react-router-dom'
import CategoryContext from '../context/category/categoryContext'

function Learn() {
  // getting all categories
  const context = useContext(CategoryContext)
  const { videos, getVideoDetails, category, getCategory } = context;


  useEffect(() => {
    getCategory("userToken");
  }, [])




  return (
    <>
      <Header details="LEARN" />
      <div className='flex'>
        <SideBar />
        <div className='p-10 overflow-y-auto grid grid-cols-5 gap-5 h-[89.5vh] bg-[url("/src/assets/bg/undraw_online_learning_re_qw08.svg")] bg-inherit bg-right-bottom bg-fixed bg-no-repeat w-screen'>
          {category.map((categories) => {
            return (
              <Link to="/videos" state={{ categoryID: categories._id, categoryName: categories.name }} key={categories._id} className="h-48 w-56 hover:shadow-lg border-2  transition-all ease-in duration-300 bg-green-100 hover:bg-green-700 hover:text-white p-5 rounded-3xl flex flex-col justify-around">
                <div className='text-lg font-bold'>
                  {categories.name}
                </div>
                <div className='border-t-2'></div>
                <div>{categories.description}</div>
              </Link>
            )
          })}


        </div>

      </div>
    </>
  )
}

export default Learn