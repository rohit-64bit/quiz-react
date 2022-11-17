import { Button, Input, Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'
import CategoryContext from '../context/category/categoryContext'

function Level(props) {
    return (

        <>
            <div className={`flex flex-col gap-5 rounded-lg bg-slate-50 shadow-slate-400 h-max w-96 px-10 py-5 border-2 hover:shadow-lg transition-all ease-in-out duration-300`}>
                <div className='font-bold text-lg'>{props.name}</div>
                <div className='font-medium text-lg'>{props.level}</div>
                <Link to="/instructor/home/addquiz" className='text-center font-medium text-lg bg-green-600 text-white hover:bg-green-700 px-3 py-1 rounded-md  transition-all ease-in-out duration-300'>CREATE QUIZ</Link>
            </div>
        </>
    )
}

function InstructorLevel() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // getting all categories
    const context = useContext(CategoryContext)
    const { category, getCategory, instructor, getInstructorProfile } = context;



    useEffect(() => {
        getInstructorProfile("instructorToken");
    }, [])

    const handleSubmit = (e)=>{

    }

    return (
        <>
            <Header details="MANAGE QUIZ" />

            <div className='flex'>
                <SidebarInstructor />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='flex justify-center place-items-center'
                >
                    <div className='p-10 h-max w-max bg-white rounded-md shadow-lg shadow-black'>
                        <form action="" onSubmit={handleSubmit}>
                            <Input placeholder='Level Name' name='level' className='p-1'></Input>
                            <Button className='border-2' type='submit'>Add Level</Button>
                        </form>
                    </div>
                </Modal>
                <div className='p-10  h-[89.5vh] w-screen'>
                    <div className='flex justify-end'>
                        <button className='bg-blue-600 w-auto px-5 py-2 rounded-md text-white font-medium' onClick={handleOpen}>Add Level</button>
                    </div>
                    <div className='overflow-y-auto grid grid-cols-3 gap-8 '></div>
                    <Level name="Quiz Name" level="Easy" color="blue" />
                </div>
            </div>
        </>
    )
}

export default InstructorLevel