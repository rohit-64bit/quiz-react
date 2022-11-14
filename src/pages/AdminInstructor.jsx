import { FunctionsOutlined } from '@mui/icons-material';
import { Box, Button, FormControl, Input, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Header from "../components/Header"
import CategoryContext from '../context/category/categoryContext';


function Instructors(props) {
    return (
        <>
            <div className='flex w-full justify-between bg-slate-100 p-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 '>
                <div className='flex gap-5 my-auto'>
                    <p className='text-lg flex '><b className='font-medium text-lg'>Name : </b> {props.instructorName}</p>
                    <p className='text-lg flex '><b className='font-medium text-lg'>Email : </b>{props.email}</p>
                    <p className='text-lg flex '><b className='font-medium text-lg'>Category : </b>{props.categoryAssinged}</p>
                </div>
                <div className='flex gap-5'>

                    <button className='p-1 transition-all ease-in-out duration-300 bg-green-600 hover:bg-green-700 text-white rounded-lg my-auto'><EditIcon /></button>
                    <button className='p-1 transition-all ease-in-out duration-300 bg-red-600 hover:bg-red-700 text-white rounded-lg my-auto'><DeleteIcon /></button>
                </div>
            </div>
        </>
    )
}


function AdminInstructor() {

    // for controlling modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // getting all categories
    const context = useContext(CategoryContext)
    const { category,getCategory,} = context;

    useEffect(() => {
        getCategory("adminToken");
    }, [])

    // api requests
    const host = "http://localhost:1000"

    // Get all instructor
    
    const instructorFetched = []

    const [instructor, setInstructor] = useState(instructorFetched)

    const getInstructor = async () => {
        const response = await fetch(`${host}/api/instructor/fetch`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            }
        });
        const json = await response.json()
        setInstructor(json)
    }
    useEffect(() => {
        getInstructor();
    }, [])

    const [data, setData] = useState({
        name: "",
        contact: "",
        email: "",
        address: "",
        qualification: "",
        password: ""
    })


    // taking category input
    const [icategory, setIcategory] = useState('');

    const handleChange = (event) => {
        setIcategory(event.target.value);
    };


    let onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // creating instructor
    const handleCreateInstructor = async (e) => {
        const response = await fetch(`${host}/api/auth/instructor/createinstructor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("adminToken")
            },
            body: JSON.stringify({ instructorName: data.name, email: data.email, phoneNo: data.contact, address: data.address, qualification: data.qualification, password: data.password, categoryAssinged: icategory }),
        });
        const json = await response.json()
    }

    return (
        <>
            <Header />
            <div className='flex'>
                <SidebarAdmin />
                <div className='p-10 h-[89.5vh] flex flex-col w-screen'>
                    <div className='flex justify-between'>
                        <p className='mb-5 font-bold'>MANAGE INSTRUCTORS'</p>
                        <button className='my-auto bg-blue-700 hover:bg-blue-800 text-white transition-all ease-in-out duration-300 px-3 py-2 rounded-lg font-bold' onClick={handleOpen}>ADD INSTRUCTOR</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="flex"
                        >
                            <div className='m-auto bg-white p-10 rounded-lg w-[50%] shadow-slate-700 shadow-lg'>
                                <form action="" onSubmit={handleCreateInstructor} className='flex flex-col gap-5 justify-around'>

                                    <p className='font-bold text-lg text-center'>ADD INSTRUCTOR</p>
                                    <Input className='font-bold' onChange={onChange} name='name' placeholder='Name'></Input>
                                    <Input className='font-bold' onChange={onChange} name='contact' placeholder='Phone No'></Input>
                                    <Input className='font-bold' onChange={onChange} name='email' placeholder='Email'></Input>
                                    <Input className='font-bold' onChange={onChange} name='address' placeholder='Address'></Input>
                                    <Input className='font-bold' onChange={onChange} name='qualification' placeholder='Qualification'></Input>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Category"
                                        value={icategory}
                                        onChange={handleChange}
                                        name='category'
                                    >

                                        {category.map((option) => {
                                            return (
                                                <MenuItem key={option._id} value={option._id}>
                                                    {option.name}
                                                </MenuItem>
                                            )
                                        })}

                                    </TextField>
                                    <Input className='font-bold' onChange={onChange} name='password' placeholder='Password'></Input>
                                    <Button sx={{
                                        "border": 2,
                                        "borderRadius": 2
                                    }}
                                        type="submit"
                                    >CONFIRM</Button>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <div className='h-[95%] flex flex-col gap-5 overflow-y-auto my-10 px-5'>

                        {instructor.map((instructors) => {
                            return (
                                <Instructors instructorName={instructors.instructorName} email={instructors.email} key={instructors._id} categoryAssinged={instructors.categoryAssinged} />
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminInstructor