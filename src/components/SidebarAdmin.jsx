import React from 'react'
import { Link, NavLink } from 'react-router-dom';
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

                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-700 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out shadow-lg font-medium bg-white' : 'text-slate-400 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out font-medium bg-white hover:text-blue-700')} to="/admin/manage/category">

                        <CategoryIcon className='m-auto' />
                        <p className='text-center m-auto text-sm'>Manage Category</p>

                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-700 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out shadow-lg font-medium bg-white' : 'text-slate-400 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out font-medium bg-white hover:text-blue-700')} to="/admin/manage/quiz">

                        <PsychologyAltIcon className='m-auto' />
                        <p className='text-center m-auto text-sm'>Manage Quiz</p>

                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-700 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out shadow-lg font-medium bg-white' : 'text-slate-400 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out font-medium bg-white hover:text-blue-700')} to="/admin/manage/instructors">

                    <ManageAccountsIcon className='m-auto' />
                            <p className='text-center m-auto text-sm'>Manage Instructors</p>

                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-700 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out shadow-lg font-medium bg-white' : 'text-slate-400 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out font-medium bg-white hover:text-blue-700')} to="/admin/manage/users">

                    <PersonIcon className='m-auto' />
                            <p className='text-center m-auto text-sm'>Manage Users</p>

                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-blue-700 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out shadow-lg font-medium bg-white' : 'text-slate-400 flex flex-col border-2 h-20 w-20 py-1 rounded-md  transition-all ease-in-out font-medium bg-white hover:text-blue-700')} to="/admin/analytics">

                        <AssessmentIcon className='m-auto' />
                        <p className='text-center m-auto text-sm'>Ueser Analytics</p>

                    </NavLink>

                    


                </div>

                <button className='flex flex-col h-20 w-20 py-1 transition-all ease-in-out hover:text-blue-700 text-slate-500 font-medium bg-white mx-auto my-2'>
                    <LogoutIcon className='mx-auto' />
                    <p className='text-center mx-auto text-sm'>Logout</p>

                </button>

            </div>
        </>
    )
}

export default SidebarAdmin