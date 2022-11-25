import React, { useContext, useEffect } from 'react'
import Quiz from '../components/Quiz'
import { Pagination } from '@mui/material'
import SideBar from '../components/SideBar'
import Header from "../components/Header"
import CategoryContext from '../context/category/categoryContext'
import { Link } from 'react-router-dom'

function Quizes() {
  const context = useContext(CategoryContext)
  const { category, getCategory } = context;

  useEffect(() => {
    getCategory("userToken");
  }, [])

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className='p-10 overflow-y-auto grid grid-cols-5 gap-5 h-[89.5vh] bg-[url("/src/assets/bg/undraw_art_museum_-8-or4.svg")] bg-inherit bg-right-bottom bg-fixed bg-no-repeat w-screen'>
          {category.map((categories) => {
            return (
              <Link to="/level" state={{ category: categories }} key={categories._id} className="h-48 w-56 hover:shadow-lg border-2  transition-all ease-in duration-200 bg-blue-100 hover:bg-blue-700 hover:text-white p-5 rounded-3xl flex flex-col justify-around">
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

export default Quizes