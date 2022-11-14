import React, { useContext, useEffect } from 'react'
import Quiz from '../components/Quiz'
import { Pagination } from '@mui/material'
import SideBar from '../components/SideBar'
import Header from "../components/Header"
import CategoryContext from '../context/category/categoryContext'

function Quizes() {
  const context = useContext(CategoryContext)
  const { category, setCategory, editCategory, getCategory, deleteCategory } = context;

  useEffect(() => {
    getCategory("userToken");
  }, [])

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className='p-10 grid grid-cols-5 gap-5 overflow-y-auto h-[89.5vh] w-screen'>
        {category.map((categories) => {
                  return (
                    <Quiz name={categories.name} description={categories.description} theme="yellow" key={categories._id}/>
                  )
                })}
        </div>
      </div>



    </>
  )
}

export default Quizes