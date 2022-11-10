import React from 'react'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'

function InstructorReport() {
    return (
        <>
            <Header details="USER REPORTS" />
            <div className='flex'>
                <SidebarInstructor />
                <div className='p-10 overflow-y-auto grid grid-cols-4 gap-8 h-[89.5vh] w-screen'>

                </div>

            </div>
        </>
    )
}

export default InstructorReport