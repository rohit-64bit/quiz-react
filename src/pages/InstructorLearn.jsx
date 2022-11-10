import React from 'react'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Input } from '@mui/material';


function ManageVideo(props) {
  return (
    <>
      <div className='bg-white h-max w-64 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 flex flex-col border-2'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png" alt="" />
        <div className='flex flex-col px-5 py-2'>

          <div className='text-xl font-bold'>Title</div>
          <div className='text-sm font-thin'>Description</div>
          <div className='font-medium'>Category</div>
        </div>
        <div className='flex justify-around p-5 '>

          <button className='p-1 transition-all ease-in-out duration-300 bg-green-600 hover:bg-green-700 text-white rounded-lg my-auto'><EditIcon /></button>
          <button className='p-1 transition-all ease-in-out duration-300 bg-red-600 hover:bg-red-700 text-white rounded-lg my-auto'><DeleteIcon /></button>
        </div>
      </div>
    </>
  )
}


function InstructorLearn() {
  return (
    <>
      <Header details="MANAGE VIDEOS" />
      <div className='flex'>
        <SidebarInstructor />
        <div className='p-10 flex h-[89.5vh] w-screen '>
        

          <div className='w-[75%] border-y-2 border-l-2 bg-slate-50 rounded-l-lg overflow-y-auto grid grid-cols-3 gap-20 p-10'>
            <ManageVideo />
            
          </div>
          <div className='w-[25%] border-y-2 border-r-2 bg-slate-50 rounded-r-lg p-10'>
            <form className='flex flex-col gap-5'>

            <Input className='w-full font-bold bg-white p-2' placeholder='Video Link' ></Input>
            <Input className='w-full font-bold bg-white p-2' placeholder='Video Category' ></Input>

            <button className='bg-blue-600 w-full p-2 rounded-sm text-white font-medium'>ADD VIDEO</button>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default InstructorLearn