import React from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header"


function QuizView(props) {
    return (
        <>
        
            <div className='flex w-full justify-between bg-slate-100 p-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 '>
                <div className='flex gap-5 my-auto'>
                    <p className='font-medium text-lg'>Name</p>
                    <p className='font-medium text-lg'>Category Name</p>
                    <p className='font-medium text-lg'>Description</p>
                    <p className='font-medium text-lg'>Instructor Name</p>
                </div>
                <button className='p-1 bg-red-600 hover:bg-red-700 text-white rounded-lg my-auto'><DeleteIcon/></button>
            </div>
        </>
    )
}


function AdminQuiz() {
    return (
        <>
        <Header/>
            <div className='flex'>
                <SidebarAdmin />
                <div className='p-10 h-[89.5vh] w-screen'>
                    <p className='mb-5 font-bold'>admin/manage/quiz</p>
                    <div className='h-[95%] flex flex-col gap-5 overflow-y-auto px-5'>
                    <QuizView />
                    <QuizView />
                    <QuizView />
                    <QuizView />
                    <QuizView />
                    <QuizView />
                    <QuizView />
                    <QuizView />
                    <QuizView />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminQuiz