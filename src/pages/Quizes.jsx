import React from 'react'
import Quiz from '../components/Quiz'
import { Pagination } from '@mui/material'
import SideBar from '../components/SideBar'
function Quizes() {
  return (
    <>
      <div className="flex">
        <SideBar/>
        <div className='p-10 grid grid-cols-5 overflow-y-auto h-[89.5vh] w-screen'>
          <Quiz topic="Science" description="Hello this is the category science quiz" theme="yellow" />
          
        </div>
      </div>



    </>
  )
}

export default Quizes