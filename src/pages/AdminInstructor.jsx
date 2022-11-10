import { FunctionsOutlined } from '@mui/icons-material';
import { Box, Button, FormControl, Input, InputLabel, MenuItem, Modal, Select } from '@mui/material'
import React, { useState } from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Header from "../components/Header"

function Instructors(props) {
    return (
        <>

            <div className='flex w-full justify-between bg-slate-100 p-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 '>
                <div className='flex gap-5 my-auto'>
                    <p className='font-medium text-lg'>Instructor Name</p>
                    <p className='font-medium text-lg'>Instructor Password</p>
                    <p className='font-medium text-lg'>Category</p>
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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <>
            <Header />
            <div className='flex'>
                <SidebarAdmin />
                <div className='p-10 h-[89.5vh] flex flex-col w-screen'>
                    <div className='flex justify-between'>
                        <p className='mb-5 font-bold'>admin/manage/instructor</p>
                        <button className='my-auto bg-blue-700 hover:bg-blue-800 text-white transition-all ease-in-out duration-300 px-3 py-2 rounded-lg font-bold' onClick={handleOpen}>ADD INSTRUCTOR</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="flex"
                        >
                            <div className='m-auto bg-white p-10 rounded-lg w-[50%] shadow-slate-700 shadow-lg'>
                                <form action="" className='flex flex-col gap-5 justify-around'>

                                    <p className='font-bold text-lg text-center'>ADD INSTRUCTOR</p>
                                    <Input className='font-bold' placeholder='Name'></Input>
                                    <Input className='font-bold' placeholder='Phone No'></Input>
                                    <Input className='font-bold' placeholder='Email'></Input>
                                    <Input className='font-bold' placeholder='Address'></Input>
                                    <Input className='font-bold' placeholder='Qualification'></Input>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={category}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Input className='font-bold' placeholder='Password'></Input>
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
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                        <Instructors />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminInstructor