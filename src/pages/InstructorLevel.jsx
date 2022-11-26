import { Button, Input, Modal } from '@mui/material'
import React, { Component, useContext, useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'
import CategoryContext from '../context/category/categoryContext'
import DeleteIcon from '@mui/icons-material/Delete';

function Level(props) {


    const context = useContext(CategoryContext)
    const { category, getCategory,getCategoryDetails, instructor, getInstructorProfile, level, setLevel } = context;


    useEffect(() => {
        getInstructorProfile("AuthInstructor");
        getCategoryDetails(props.categoryId, "AuthInstructor")
    }, [])


    const deleteLevel = async (id) => {
        // API Call
        const response = await fetch(`http://localhost:1000/api/level/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("AuthInstructor")
            }
        });
        const json = response.json();
        const newLevel = level.filter((level) => { return level._id !== id })
        setLevel(newLevel)
    }

    const handleDelete = () => {
        deleteLevel(props.id)
        window.location.reload()
    }

    const handleEdit = () => {
        console.log("delete level");
    }


    return (

        <>
            <div className={`flex flex-col gap-5 rounded-lg bg-slate-50 shadow-slate-400 h-max w-96 px-10 py-5 border-2 hover:shadow-lg transition-all ease-in-out duration-300`}>
                <div className='flex justify-between'>

                    <div className='font-bold text-lg'>{props.name}</div>
                    <div>
                        <button onClick={handleEdit}></button>
                        <button onClick={handleDelete} className=' text-slate-400 hover:text-slate-800 transition-all ease-in-out duration-300'><DeleteIcon /> </button>
                    </div>
                </div>
                <div className='font-medium text-lg'>{props.level}</div>
                <Link to="/instructor/home/addquiz" state={{ category: props.categoryId, level: props.level, name: props.name, levelID: props.id }} className='text-center font-medium text-lg bg-green-600 text-white hover:bg-green-700 px-3 py-1 rounded-md  transition-all ease-in-out duration-300'>CREATE QUIZ</Link>
            </div>
        </>
    )
}

function InstructorLevel() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => setOpen(false);

    // const [ignored, forceUpdate] = useReducer(x => x+1, 0)


    // getting required contexts
    const context = useContext(CategoryContext)
    const { category, getCategory, getCategoryDetails, categoryData, instructor, getInstructorProfile, level, getLevelDetails } = context;



    const [data, setData] = useState({
        name: ""
    });

    const credentials = {
        name: data.name,
        category: instructor.categoryAssinged
    }

    useEffect(() => {
        // getCategoryDetails(credentials.category, "AuthInstructor")
        getLevelDetails("AuthInstructor", credentials.category)
        getInstructorProfile("AuthInstructor");
    }, [credentials.category])


    let onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    // console.log(instructor.categoryAssinged);

    const handleSubmit = async (e) => {
        const response = await fetch('http://localhost:1000/api/level/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('AuthInstructor'),

            },
            body: JSON.stringify(credentials)
        })
        const json = await response.json()
        forceUpdate();
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
                        <form onSubmit={handleSubmit}>
                            <Input placeholder='Level Name' value={data.name} onChange={onChange} name='name' className='p-1'></Input>
                            <Button className='border-2' type='submit'>Add Level</Button>
                        </form>
                    </div>
                </Modal>
                <div className='p-10  h-[89.5vh] w-screen'>
                    <div className='flex justify-between mb-5'>
                        <div className="flex gap-10">
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Instructor Name</p>
                                <div className='font-medium'>{instructor.instructorName}</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Instructor Email</p>
                                <div className='font-medium'>{instructor.email}</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Assinged Category</p>
                                <div className='font-medium'>{instructor.categoryName}</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Instructor ID</p>
                                <div className='font-medium'>{instructor._id}</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Assinged Category ID</p>
                                <div className='font-medium'>{instructor.categoryAssinged}</div>
                            </div>


                        </div>
                        <button className='bg-blue-600 w-auto px-5 py-2 rounded-md text-white font-medium' onClick={handleOpen}>Add Level</button>
                    </div>
                    <div className='overflow-y-auto h-[90%] grid grid-cols-3 gap-8 '>
                        {level.map((option) => {
                            return (
                                <Level id={option._id} categoryId={instructor.categoryAssinged} name={instructor.categoryName} key={option._id} level={option.name} />
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default InstructorLevel