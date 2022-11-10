import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
function SideBar() {
    return (
        <div className='flex flex-col h-[89.5vh] w-24  border-r-2 shadow-lg shadow-slate-800 justify-between'>
            <div className='flex flex-col gap-3 py-3 mx-auto'>

                <NavLink className={({ isActive }) => (isActive ? 'text-blue-700 flex flex-col border-2 h-20 w-20 py-3 rounded-md  transition-all ease-in-out shadow-lg font-medium bg-white' : 'text-slate-400 flex flex-col border-2 h-20 w-20 py-3 rounded-md  transition-all ease-in-out font-medium bg-white hover:text-blue-700')} to="/quizes">

                    <PsychologyAltIcon className='mx-auto' />
                    <p className='text-center mx-auto text-sm'>Quiz</p>

                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-700 flex flex-col border-2 h-20 w-20 py-3 rounded-md  transition-all ease-in-out shadow-lg font-medium bg-white' : 'text-slate-400 flex flex-col border-2 h-20 w-20 py-3 rounded-md  transition-all ease-in-out font-medium bg-white hover:text-blue-700')} to="/learn">

                    <LightbulbIcon className='mx-auto' />
                    <p className='text-center mx-auto text-sm'>Learn</p>

                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-700 flex flex-col border-2 h-20 w-20 py-3 rounded-md  transition-all ease-in-out shadow-lg font-medium bg-white' : 'text-slate-400 flex flex-col border-2 h-20 w-20 py-3 rounded-md  transition-all ease-in-out font-medium bg-white hover:text-blue-700')} to="/report">

                    <AssessmentIcon className='mx-auto' />
                    <p className='text-center mx-auto text-sm'>Report</p>

                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-700 flex flex-col border-2 h-20 w-20 py-3 rounded-md  transition-all ease-in-out shadow-lg font-medium bg-white' : 'text-slate-400 flex flex-col border-2 h-20 w-20 py-3 rounded-md  transition-all ease-in-out font-medium bg-white hover:text-blue-700')} to="/myprofile">

                    <PersonIcon className='mx-auto' />
                    <p className='text-center mx-auto text-sm'>My Profile</p>

                </NavLink>
                
            </div>

            <button className='flex flex-col h-20 w-20 py-3 transition-all ease-in-out hover:text-blue-700 text-slate-500 font-medium bg-white mx-auto my-2'>
                <LogoutIcon className='mx-auto' />
                <p className='text-center mx-auto text-sm'>Logout</p>

            </button>

        </div>
    )
}

export default SideBar