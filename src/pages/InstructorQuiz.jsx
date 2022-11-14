import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Quiz from '../components/Quiz'
import SidebarInstructor from '../components/SidebarInstructor'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import CategoryContext from '../context/category/categoryContext';

function CategoryComponent(props) {
  return (
    <>
      <div className='flex w-auto h-max justify-between bg-slate-100 p-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 '>
        <div className='flex gap-5 my-auto'>
          <p className='font-medium text-lg'>{props.name}</p>
          <p className='font-medium text-lg'>{props.description}</p>
        </div>
        <div className='flex gap-5'>
          <Link to="/instructor/home/level" className='px-3 py-1 transition-all ease-in-out duration-300 bg-green-600 hover:bg-green-700 text-white rounded-md my-auto font-bold'>View Levels</Link>
        </div>
      </div>
    </>
  )
}

function InstructorQuiz() {
  // getting all categories
  const context = useContext(CategoryContext)
  const { category, getCategory } = context;

  useEffect(() => {
    getCategory("instructorToken");
  }, [])

  return (

    <>
      <Header details="MANAGE QUIZ" />
      <div className='flex'>
        <SidebarInstructor />
        <div className='p-10 overflow-y-auto grid grid-cols-1 gap-8 h-[89.5vh] w-screen'>


        </div>
      </div>
    </>

  )
}

export default InstructorQuiz