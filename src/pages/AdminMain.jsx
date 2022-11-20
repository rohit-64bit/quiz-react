import React, { useEffect, useState } from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Input, Modal } from '@mui/material';
import Header from "../components/Header"
import { Category } from '@mui/icons-material';
import CategoryContext from '../context/category/categoryContext';
import { useContext } from 'react';



function CategoryView(props) {

  const context = useContext(CategoryContext)
  const { deleteCategory } = context;

  const [data, setData] = useState({
    name: "",
    description: "",
  })


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  let onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  function handleDelete() {
    deleteCategory(props.id)
    window.location.reload();
  }

  const handleEdit = (e) => {
    // e.preventDefault()
    editCategory(props.id)
    console.log(data);
  }


  // Edit a Note
  const editCategory = async (id) => {
    // API Call 
    const response = await fetch(`http://localhost:1000/api/category/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("adminToken")
      },
      body: JSON.stringify({ name: data.name, description: data.description })
    });
    // const json = await response.json();
    // console.log(json);
  }

  return (
    <>
      <div className='w-full flex justify-between p-5 rounded-lg bg-white'>
        <p className=' my-auto font-medium'>{props.name}</p>
        <p className=' my-auto font-light'>{props.description}</p>
        <div className='flex gap-5 text-white'>
          <button className='bg-green-600 rounded-lg p-1 hover:bg-green-700 transition-all ease-in-out duration-500' onClick={handleOpen}><EditIcon /></button>
          <button className='bg-red-600 rounded-lg p-1 hover:bg-red-700 transition-all ease-in-out duration-500' onClick={handleDelete}><DeleteIcon /></button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex"
      >
        <div className='m-auto bg-white rounded-2xl w-[50%] shadow-slate-700 shadow-lg'>
          <div className="flex gap-10 p-10">
            <div>
              <p className='text-slate-500 font-medium text-xs'>Category Name</p>
              <div className='font-medium'>{props.name}</div>
            </div>
            <div>
              <p className='text-slate-500 font-medium text-xs'>Category Description</p>
              <div className='font-medium'>{props.description}</div>
            </div>
          </div>
          <form method='' className='flex my-auto rounded-2xl flex-col gap-10 p-10 '>
            <Input onChange={onChange} placeholder='Edit Name' name='name' type='text'></Input>
            <Input onChange={onChange} placeholder='Edit Description' name='description' type='text'></Input>
            <button onClick={handleEdit} className='w-full h-12 bg-blue-600 hover:bg-blue-700 font-medium text-white transition-all ease-in-out duration-500 rounded-lg ' type='submit'>SAVE CATEGORY</button>
          </form>
        </div>
      </Modal>
    </>
  )
}

function AdminMain() {
  const [data, setData] = useState({
    name: "",
    description: "",
  })

  const handleSubmit = async (e) => {
    const response = await fetch("http://localhost:1000/api/category/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: data.name, description: data.description })
    });
    const json = await response.json()
  }
  let onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const context = useContext(CategoryContext)
  const { category, getCategory, } = context;

  useEffect(() => {
    getCategory("adminToken");
  }, [])



  return (
    <>
      <Header details="MANAGE CATEGORY" />
      <div className='flex'>
        <SidebarAdmin />
        <div className='p-10'>
          <p className='font-bold my-2'>Admin/main</p>
          <div className='flex gap-5 w-max justify-between'>
            <div className='bg-slate-100 h-[70.5vh] w-[42rem] rounded-lg shadow-lg p-5  '>
              <p className='text-lg font-bold mb-2 '>Edit Category</p>
              <div className='h-[57vh] flex flex-col gap-3 overflow-y-auto px-3'>

                {category.map((categories) => {
                  return (
                    <CategoryView id={categories._id} name={categories.name} description={categories.description} key={categories._id} />
                  )
                })}



              </div>
            </div>


            <div className='bg-slate-100 h-[70.5vh] w-[42rem] rounded-lg shadow-lg p-5  '>
              <p className='text-lg font-bold'>Add Category</p>
              <form method='' onSubmit={handleSubmit} className='flex flex-col gap-10 p-10 '>
                <Input onChange={onChange} placeholder='Category Name' name='name' type='text'></Input>
                <Input onChange={onChange} placeholder='Category Description' name='description' type='text'></Input>
                <button className='w-full h-12 bg-blue-600 hover:bg-blue-700 font-medium text-white transition-all ease-in-out duration-500 rounded-lg ' type='submit'>ADD CATEGORY</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminMain