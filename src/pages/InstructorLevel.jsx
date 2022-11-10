import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'

function Level(props) {
    return (

        <>
            <div className={`flex flex-col gap-5 rounded-lg bg-slate-50 shadow-slate-400 h-max w-96 px-10 py-5 border-2 hover:shadow-lg transition-all ease-in-out duration-300`}>
                <div className='font-bold text-lg'>{props.name}</div>
                <div className='font-medium text-lg'>{props.level}</div>
                <Link to="/instructor/home/level/addquiz" className='text-center font-medium text-lg bg-green-600 text-white hover:bg-green-700 px-3 py-1 rounded-md  transition-all ease-in-out duration-300'>CREATE QUIZ</Link>
            </div>
        </>
    )
}

function InstructorLevel() {
    return (
        <>
            <Header details="MANAGE QUIZ" />
            <div className='flex'>
                <SidebarInstructor />
                <div className='p-10 overflow-y-auto grid grid-cols-3 gap-8 h-[89.5vh] w-screen'>
                    <Level name="Quiz Name" level="Easy" color="blue" />
                    <Level name="Quiz Name" level="Medium" color="green" />
                    <Level name="Quiz Name" level="Medium" color="orange" />
                </div>

            </div>
        </>
    )
}

export default InstructorLevel