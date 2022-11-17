import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Input, MenuItem, TextField } from '@mui/material';
import CategoryContext from '../context/category/categoryContext';


function InstructorLearn() {

  const [data, setData] = useState('');

  const context = useContext(CategoryContext)
  const { category, getCategory, videos, getVideoDetails } = context;

  useEffect(() => {
    getCategory("instructorToken");
    getVideoDetails("instructorToken");
  }, [])




  const handleAdd = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1000/api/video/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('instructorToken')
      },
      body: JSON.stringify(data)
    });
  }

  let onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  return (
    <>
      <Header details="MANAGE VIDEOS" />
      <div className='flex'>
        <SidebarInstructor />
        <div className='p-10 flex h-[89.5vh] w-screen '>


          <div className='w-[75%] border-y-2 border-l-2 bg-slate-50 rounded-l-lg overflow-y-auto grid grid-cols-3 gap-20 p-10'>


            {videos.map((options) => {
              return (
                <div key={options._id} className='bg-white h-max w-64 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 flex flex-col border-2'>
                  <img src={options.imageLink} alt="" />
                  <div className='flex flex-col px-5 py-2'>

                    <div className='text-xl font-bold'>{options.title}</div>
                    <div className='font-medium'>{options.description}</div>
                  </div>
                  <div className='flex justify-around p-5 '>

                    <button className='p-1 transition-all ease-in-out duration-300 bg-green-600 hover:bg-green-700 text-white rounded-lg my-auto'><EditIcon /></button>
                    <button className='p-1 transition-all ease-in-out duration-300 bg-red-600 hover:bg-red-700 text-white rounded-lg my-auto'><DeleteIcon /></button>
                  </div>
                </div>
              )
            })}


          </div>
          <div className='w-[25%] border-y-2 border-r-2 bg-slate-50 rounded-r-lg p-10'>
            <form onSubmit={handleAdd} className='flex flex-col gap-5'>

              <Input name='url' onChange={onChange} className='w-full font-bold bg-white p-2' placeholder='Video Link' ></Input>

              {/* this can be used when we assign multiple categories to the instructor */}
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

              </TextField> */}

              <button className='bg-blue-600 w-full p-2 rounded-sm text-white font-medium' type='submit'>ADD VIDEO</button>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default InstructorLearn