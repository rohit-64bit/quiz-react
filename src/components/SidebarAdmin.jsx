import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import { Modal } from '@mui/material';


function SidebarAdmin() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const logoutManagers = () => {
        window.location.reload(true);
        localStorage.removeItem("adminToken")
    }
    return (
        <>

            <div className='flex flex-col h-[89.5vh] w-24  border-r-2 shadow-lg shadow-slate-800 justify-between'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='flex'
                >
                    <div className='bg-white rounded-lg shadow-lg shadow-slate-700 flex flex-col justify-around h-40 w-64 m-auto p-5'>
                        <p className='font-bold text-lg'>Hey! Admin</p>
                        <p className='font-medium text-sm'>Confirm Logout</p>
                        <div className='flex justify-between'>
                            <button className='px-2 py-1 w-24 text-white font-medium rounded transition-all ease-in-out duration-300 bg-blue-700 hover:bg-blue-800' onClick={logoutManagers}>LOGOUT</button>
                            <button className='px-2 py-1 w-24 text-white font-medium rounded transition-all ease-in-out duration-300 bg-red-700 hover:bg-red-800' onClick={handleClose}>CANCEL</button>
                        </div>
                    </div>
                </Modal>
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

                <button onClick={handleOpen} className='flex flex-col h-20 w-20 py-1 transition-all ease-in-out hover:text-blue-700 text-slate-500 font-medium bg-white mx-auto my-2'>
                    <LogoutIcon className='mx-auto' />
                    <p className='text-center mx-auto text-sm'>Logout</p>

                </button>


            </div>
        </>
    )
}

export default SidebarAdmin