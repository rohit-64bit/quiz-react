import React from 'react'
import LearnVideo from '../components/LearnVideo'
import SideBar from '../components/SideBar'
import imgSample from "../assets/code1.jpg"

function Learn() {
  return (
    <>
    <div className='flex'>
        <SideBar/>
        <div className='p-10 overflow-y-auto grid grid-cols-4 gap-8 h-[89.5vh] w-screen'>
            <LearnVideo description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti tempora corporis quae ad quibusdam ipsum reprehenderit." title="Title of the video" videoLink="https://www.youtube.com/watch?v=-VYfFozcJoY" imgThumbnail={imgSample}  />
            
            
        </div>

    </div>
    </>
  )
}

export default Learn