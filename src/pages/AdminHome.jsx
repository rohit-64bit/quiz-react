import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import img from '../assets/bg/undraw_add_notes_re_ln36.svg'

function AdminHome() {
    return (
        <>
            <Header />
            <div className='flex flex-col gap-16 h-[89.5vh] py-32 bg-[url("/src/assets/bg/bghome.jpeg")]'>
                <div className="grid grid-cols-4 gap-20 m-auto">
                    <Link className='text-slate-500 hover:text-white hover:bg-blue-700 p-4 flex flex-col border-2 h-32 w-32 py-3 rounded-lg duration-300 transition-all ease-in hover:shadow-lg font-medium bg-white' to="/admin/manage/category">

                        <CategoryIcon className='m-auto' />
                        <p className='text-center m-auto text-lg font-medium'>Manage Category</p>
                    </Link>
                    {/* <Link className='text-slate-500 hover:text-white hover:bg-blue-700 p-4 flex flex-col border-2 h-32 w-32 py-3 rounded-lg duration-300 transition-all ease-in hover:shadow-lg font-medium bg-white' to="/admin/manage/quiz">

                        <PsychologyAltIcon className='m-auto' />
                        <p className='text-center m-auto text-lg font-medium'>Manage Quiz</p>

                    </Link> */}
                    <Link className='text-slate-500 hover:text-white hover:bg-blue-700 p-4 flex flex-col border-2 h-32 w-32 py-3 rounded-lg duration-300 transition-all ease-in hover:shadow-lg font-medium bg-white' to="/admin/manage/instructors">

                        <ManageAccountsIcon className='m-auto' />
                        <p className='text-center m-auto text-lg font-medium'>Manage Instructors</p>

                    </Link>
                


                    <Link className='text-slate-500 hover:text-white hover:bg-blue-700 p-4 flex flex-col border-2 h-32 w-32 py-3 rounded-lg duration-300 transition-all ease-in hover:shadow-lg font-medium bg-white' to="/admin/manage/users">

                        <PersonIcon className='m-auto' />
                        <p className='text-center m-auto text-lg font-medium'>Manage Users</p>

                    </Link>
                    <Link className='text-slate-500 hover:text-white hover:bg-blue-700 p-4 flex flex-col border-2 h-32 w-32 py-3 rounded-lg duration-300 transition-all ease-in hover:shadow-lg font-medium bg-white' to="/admin/analytics">

                        <AssessmentIcon className='m-auto' />
                        <p className='text-center m-auto text-lg font-medium'>User Analytics</p>

                    </Link>
                    {/* <button className='text-slate-500 hover:text-white hover:bg-red-600 flex flex-col border-2 h-32 w-32 py-3 rounded-lg duration-300 transition-all ease-in hover:shadow-lg font-medium bg-white'>

                        <LogoutIcon className='m-auto' />
                        <p className='text-center m-auto text-lg font-medium'>Logout</p>

                    </button> */}
                </div>
            </div>
        </>
    )
}

export default AdminHome