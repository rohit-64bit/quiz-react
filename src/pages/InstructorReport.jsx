import React from 'react'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'

function UserReport(props) {
    return (
        <>
            <div className='flex w-full h-max justify-between bg-slate-100 p-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 '>
                <div className="flex gap-10 my-auto">
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>User Name</p>
                        <div className='font-medium'>{props.userEmail}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Quiz Category</p>
                        <div className='font-medium'>{props.quizName}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Level</p>
                        <div className='font-medium'>{props.quizLevel}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Score</p>
                        <div className='font-medium'>{props.quizScore}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

function InstructorReport() {


    
    return (
        <>
            <Header details="USER REPORTS" />
            <div className='flex'>
                <SidebarInstructor />
                <div className='p-10 overflow-y-auto gap-8 h-[89.5vh] w-screen'>
                    <UserReport userEmail="test@gmail.com" quizName="Science" quizLevel="Easy" quizScore="50" />
                </div>

            </div>
        </>
    )
}

export default InstructorReport