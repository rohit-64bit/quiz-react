import { FunctionsOutlined } from '@mui/icons-material';
import { Box, Button, FormControl, Input, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Header from "../components/Header"
import CategoryContext from '../context/category/categoryContext';
import CancelIcon from '@mui/icons-material/Cancel';


function Instructors(props) {


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [eOpen, setEOpen] = useState(false);
    const handleEOpen = () => setEOpen(true);
    const handleEClose = () => setEOpen(false);

    const [data, setData] = useState({
        name: "",
        contact: "",
        email: "",
        address: "",
        qualification: ""
    })


    // taking category input
    const [icategory, setIcategory] = useState('');

    const handleChange = (event) => {
        setIcategory(event.target.value);
    };


    let onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const context = useContext(CategoryContext)
    const { category, getCategory, deleteInstructor } = context;

    useEffect(() => {
        getCategory("adminToken");
    }, [])


    let id = props.id;

    const handleEditInstructor = async (instructorId) => {
        console.log(instructorId);
        const response = await fetch(`http://localhost:1000/api/instructor/update/${instructorId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            },
            body: JSON.stringify({ id: id, instructorName: data.name, email: data.email, phoneNo: data.contact, address: data.address, qualification: data.qualification }),
        });
    }

    function handleEdit() {
        handleEditInstructor(props.id)
    }

    function handleDelete() {
        deleteInstructor(id);
        // setNotification({ message: "Instructor Deleted Successfully", type: 'success', status: 'true' })
        window.location.reload();
    }

    return (

        <>
            {/* edit instructor */}
            <Modal
                open={eOpen}
                onClose={handleEClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="flex"
            >
                <div className='m-auto bg-white p-10 rounded-lg w-[50%] shadow-slate-700 shadow-lg'>
                    <form action="" className='flex flex-col gap-5 justify-around'>

                        <p className='font-bold text-lg text-center'>EDIT INSTRUCTORS PII</p>
                        <div className="flex gap-3">
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Instructor Name</p>
                                <div className='font-medium'>{props.instructorName}</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Email</p>
                                <div className='font-medium'>{props.email}</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Category</p>
                                <div className='font-medium'>{props.categoryAssinged}</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Contact</p>
                                <div className='font-medium'>{props.contact}</div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Address</p>
                                <div className='font-medium'>{props.address}</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Qualification</p>
                                <div className='font-medium'>{props.qualification}</div>
                            </div>
                        </div>
                        <Input className='font-bold' onChange={onChange} name='name' placeholder='Name'></Input>
                        <Input className='font-bold' onChange={onChange} name='contact' placeholder='Phone No'></Input>

                        <Input className='font-bold' onChange={onChange} name='email' placeholder='Email'></Input>
                        <Input className='font-bold' onChange={onChange} name='address' placeholder='Address'></Input>

                        <Input className='font-bold' onChange={onChange} name='qualification' placeholder='Qualification'></Input>

                        {/* <TextField
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

                        <Input className='font-bold' onChange={onChange} name='categoryName' placeholder='Type The Selected Category Name'></Input>

                        <Input className='font-bold' onChange={onChange} name='password' placeholder='Password'></Input> */}
                        <Button sx={{
                            "border": 2,
                            "borderRadius": 2
                        }}
                            type="submit"
                            onClick={handleEdit}
                        >CONFIRM EDIT</Button>
                    </form>
                </div>
            </Modal>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="flex justify-between items-center"
            >
                <div className='p-10 w-[30%] bg-slate-100 rounded-md'>
                    <div className='flex justify-end text-slate-400 hover:text-slate-800 mb-5 transition-all ease-in duration-300 '><CancelIcon className='cursor-pointer' onClick={handleClose} /></div>
                    <div className='font-bold text-lg text-red-800 mb-5'>You are about to DELETE a INSTRUCTOR !</div>
                    <button className='w-full rounded-md hover:bg-red-800 font-medium bg-red-700 transition-all ease-in duration-300 text-xl text-white p-3' onClick={handleDelete}>DELETE</button>
                </div>
            </Modal>
            <div className='flex w-full justify-between bg-slate-100 hover:bg-indigo-200 p-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 '>
                <div className='flex gap-5 my-auto'>
                    <p className='text-lg flex '><b className='font-medium text-lg mr-1 '>Name : </b> {props.instructorName}</p>
                    <p className='text-lg flex '><b className='font-medium text-lg mr-1 '>Email : </b> {props.email}</p>
                    <p className='text-lg flex '><b className='font-medium text-lg mr-1 '>Category Name : </b> {props.categoryAssinged}</p>
                </div>
                <div className='flex gap-5'>

                    <button className='p-1 transition-all ease-in-out duration-300 bg-green-600 hover:bg-green-700 text-white rounded-lg my-auto' onClick={handleEOpen}><EditIcon /></button>
                    <button onClick={handleOpen} className='p-1 transition-all ease-in-out duration-300 bg-red-600 hover:bg-red-700 text-white rounded-lg my-auto'><DeleteIcon /></button>
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
    let { category, getCategory, setNotification } = context;



    const [sortedCategory, setSortedCategory] = useState([])


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


    const [nonCategories, setNonCategories] = useState([])
    const getNonCategories = async () => {
        const response = await fetch(`${host}/api/category/fetch/notcategory`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            }
        });
        const json = await response.json()
        setNonCategories(json)
        console.log(json);
    }


    useEffect(() => {
        getCategory("adminToken");
        getNonCategories("adminToken");
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
        // e.preventDefault()
        const response = await fetch(`${host}/api/auth/instructor/createinstructor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("adminToken")
            },
            body: JSON.stringify({ instructorName: data.name, email: data.email, phoneNo: data.contact, address: data.address, qualification: data.qualification, password: data.password, categoryAssinged: icategory._id, categoryName: icategory.name }),
        });
        const json = await response.json()

        if (json.success) {
            setNotification({ message: "Instructor Created Successfully", type: 'success', status: 'true' })
            // window.location.reload()
        }
    }


    return (
        <>
            <Header details="MANAGE INSTRUCTOR" />
            <div className='flex'>
                <SidebarAdmin />
                <div className='p-10 h-[89.5vh] flex flex-col w-screen'>
                    <div className='flex justify-between'>
                        <p className='mb-5 font-bold'>MANAGE INSTRUCTORS'</p>
                        <button className='my-auto bg-blue-700 hover:bg-blue-800 text-white transition-all ease-in-out duration-300 px-3 py-2 rounded-lg font-bold' onClick={handleOpen}>ADD INSTRUCTOR</button>
                        {/* create instructor */}
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="flex"
                        >
                            <div className='m-auto bg-white p-10 flex rounded-lg w-[50%] shadow-slate-700 shadow-lg'>
                                {/* <div className='w-[40%]'>
                                    <table className=''>
                                        <thead>
                                            <tr>
                                                <th>Instructor Email</th>
                                                <th>Assinged Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {instructor.map((data) => {
                                                return (
                                                    <tr key={data._id}>
                                                        <td>{data.email}</td>
                                                        <td>{data.categoryName}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div> */}
                                <form action="" onSubmit={handleCreateInstructor} className='flex flex-col gap-5 justify-around w-full'>

                                    <p className='font-bold text-lg text-center'>ADD INSTRUCTOR</p>
                                    <Input className='font-bold' required onChange={onChange} name='name' placeholder='Name'></Input>
                                    <Input className='font-bold' required onChange={onChange} name='contact' placeholder='Phone No'></Input>
                                    <Input className='font-bold' required onChange={onChange} name='email' placeholder='Email'></Input>
                                    <Input className='font-bold' required onChange={onChange} name='address' placeholder='Address'></Input>
                                    <Input className='font-bold' required onChange={onChange} name='qualification' placeholder='Qualification'></Input>
                                    <TextField
                                        select
                                        label="Category"
                                        value={icategory}
                                        onChange={handleChange}
                                        name='category'
                                        required
                                    >

                                        {nonCategories.map((option) => {
                                            return (
                                                <MenuItem key={option._id} value={option}>
                                                    {option.name}
                                                </MenuItem>
                                            )
                                        })}

                                    </TextField>
                                    <Input required className='font-bold' onChange={onChange} name='password' placeholder='Password'></Input>

                                    <Button
                                        sx={{
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
                                <Instructors id={instructors._id} instructorName={instructors.instructorName} email={instructors.email} key={instructors._id} categoryAssinged={instructors.categoryName} address={instructors.address} qualification={instructors.qualification} contact={instructors.phoneNo} />
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminInstructor