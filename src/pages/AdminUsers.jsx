import React, { useContext, useEffect, useState } from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import Header from "../components/Header"
import { Modal } from '@mui/material';
import CategoryContext from '../context/category/categoryContext';

function ManageUser(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const context = useContext(CategoryContext)
    const { deleteUser,setNotification } = context;


    // /api/user/delete/:id
    const handleDelete = () => {
        deleteUser(props.id)
        setNotification({ message: "User Deleted", type: 'success', status: 'true' })
        // window.location.reload()
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="flex"
            >
                <div className='m-auto bg-white rounded-2xl w-[40%] shadow-slate-700 shadow-lg p-10'>
                    <div className='text-red-800 font-medium text-xl text-center mb-10'>You are about to delete the user : {props.name} id: {props.id}</div>
                    <button className='mx-auto p-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all ease-out duration-300 w-full' onClick={handleDelete}>CONFIRM DELETE USER</button>
                </div>
            </Modal>
            <div className='flex w-full justify-between bg-slate-100 p-5 hover:bg-blue-200 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 '>
                <div className='flex gap-5 my-auto'>
                    <p className='font-medium text-lg'>Name : {props.name}</p>
                    <p className='font-medium text-lg'>Email : {props.email}</p>
                    <p className='font-medium text-lg'>User ID : {props.id}</p>
                </div>
                <div className='flex gap-5'>

                    {/* <button className='p-1 transition-all ease-in-out duration-300 bg-slate-600 hover:bg-slate-700 text-white rounded-lg my-auto'><BlockIcon /></button> */}
                    <button className='p-1 transition-all ease-in-out duration-300 bg-red-600 hover:bg-red-700 text-white rounded-lg my-auto' onClick={handleOpen}><DeleteIcon /></button>
                </div>
            </div>
        </>
    )
}


function AdminUsers() {


    const context = useContext(CategoryContext)
    const { getUserAll, setUserAll, userAll } = context;

    useEffect(() => {
        getUserAll();
    }, [])




    return (
        <>
            <Header details="MANAGE USER" />
            <div className='flex'>
                <SidebarAdmin />
                <div className='p-10 h-[89.5vh] flex flex-col w-screen'>
                    <div className=''>
                        <p className='mb-5 font-bold'>admin/manage/instructor</p>
                    </div>
                    <div className='h-[95%] flex flex-col gap-5 overflow-y-auto my-10 px-5'>

                        {userAll.map((users) => {
                            return (
                                <ManageUser id={users._id} name={users.name} email={users.email} key={users._id} />
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsers