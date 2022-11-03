import React from 'react'
import { Link } from 'react-router-dom';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';


function SidebarAdmin() {
  return (
    <>
    <div className='flex flex-col h-[89.5vh] w-24  border-r-2 shadow-lg shadow-slate-800 justify-between'>
            <div className='flex flex-col gap-3 py-3 mx-auto'>
                
                <Link to="/admin/main">
                    <button className='flex flex-col border-2 h-20 w-20 rounded-md  transition-all ease-in-out hover:text-blue-700 text-slate-400 hover:shadow-lg font-medium bg-white'>
                        <CategoryIcon className='m-auto' />
                        <p className='text-center m-auto text-sm'>Manage Category</p>
                    </button>
                </Link>
                <Link to="/admin/main/quiz">
                    <button className='flex flex-col border-2 h-20 w-20 rounded-md  transition-all ease-in-out hover:text-blue-700 text-slate-400 hover:shadow-lg font-medium bg-white'>
                        <PsychologyAltIcon className='m-auto' />
                        <p className='text-center m-auto text-sm'>Manage Quiz</p>
                    </button>
                </Link>
                <Link to="/admin/manage/instructors">
                    <button className='flex flex-col border-2 h-20 w-20 rounded-md  transition-all ease-in-out hover:text-blue-700 text-slate-400 hover:shadow-lg font-medium bg-white'>
                        <ManageAccountsIcon className='m-auto' />
                        <p className='text-center m-auto text-sm'>Manage Instructors</p>
                    </button>
                </Link>
                <Link to="/admin/analytics">
                    <button className='flex flex-col border-2 h-20 w-20 rounded-md  transition-all ease-in-out hover:text-blue-700 text-slate-400 hover:shadow-lg font-medium bg-white'>
                        <AssessmentIcon className='m-auto' />
                        <p className='text-center m-auto text-sm'>Ueser Analytics</p>
                    </button>
                </Link>
                <Link to="/admin/manage/users">
                    <button className='flex flex-col border-2 h-20 w-20 rounded-md  transition-all ease-in-out hover:text-blue-700 text-slate-400 hover:shadow-lg font-medium bg-white'>
                        <PersonIcon className='m-auto' />
                        <p className='text-center m-auto text-sm'>Manage Users</p>
                    </button>
                </Link>
            </div>

                <button className='flex flex-col h-20 w-20 py-3 transition-all ease-in-out hover:text-blue-700 text-slate-500 font-medium bg-white mx-auto my-2'>
                    <LogoutIcon className='mx-auto' />
                    <p className='text-center mx-auto text-sm'>Logout</p>

                </button>
           
        </div>
    </>
  )
}

export default SidebarAdmin