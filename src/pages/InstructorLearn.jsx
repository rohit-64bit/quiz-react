import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Input, MenuItem, TextField } from '@mui/material';
import CategoryContext from '../context/category/categoryContext';


function Video(props) {
  const context = useContext(CategoryContext)
  const { setVideos, videos, } = context;

  const deleteVideo = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:1000/api/video/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("AuthInstructor")
      }
    });
    const json = response.json();
    const newVideo = videos.filter((videos) => { return videos._id !== id })
    setVideos(newVideo)
  }


  function handleDelete() {
    deleteVideo(props.id)
    window.location.reload();
  }


  return (
    <div className='bg-white h-max w-64 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 flex flex-col border-2'>
      <img src={props.imageLink} alt="" className='rounded-t-lg' />
      <div className='flex flex-col px-5 py-2'>

        <div className='text-xl font-bold'>{props.title}</div>
        <div className='font-medium'>{props.description}</div>
      </div>
      <div className='flex justify-around p-5 '>
        <button onClick={handleDelete} className='p-1 transition-all ease-in-out duration-300 px-3 bg-red-600 hover:bg-red-700 text-white rounded-lg my-auto'><DeleteIcon /> Delete</button>
      </div>
    </div>
  )
}



function InstructorLearn() {



  const context = useContext(CategoryContext)
  const { category, getCategory, setVideos, videos, getVideoDetails, getInstructorProfile, instructor } = context;

  console.log(instructor);


  useEffect(() => {
    getVideoDetails(instructor.categoryAssinged, "AuthInstructor");
    getInstructorProfile("AuthInstructor")
  }, [instructor.categoryAssinged])

  const [link, setLink] = useState('');

  const data = {
    url: link.url,
    categoryID: instructor.categoryAssinged
  }

  console.log(data);

  const handleAdd = async (e) => {
    const response = await fetch("http://localhost:1000/api/video/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('AuthInstructor')
      },
      body: JSON.stringify(data)
    });
  }

  let onChange = (e) => {
    setLink({ ...data, [e.target.name]: e.target.value })
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
                <Video id={options._id} key={options._id} title={options.title} description={options.description} imageLink={options.imageLink} />
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