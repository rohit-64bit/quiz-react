import React from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Input } from '@mui/material';
import Header from "../components/Header"
import { Category } from '@mui/icons-material';

function CategoryView(props) {
  return (
    <>
      <div className='w-full flex justify-between p-5 rounded-lg bg-white'>
        <p className=' my-auto font-medium'>{props.name}</p>
        <p className=' my-auto font-light'>{props.description}</p>
        <div className='flex gap-5'>
          <button className='bg-green-300 rounded-lg p-1 hover:bg-green-400 transition-all ease-in-out duration-500'><EditIcon /></button>
          <button className='bg-red-400 rounded-lg p-1 hover:bg-red-500 transition-all ease-in-out duration-500'><DeleteIcon /></button>
        </div>
      </div>
    </>
  )
}

function AdminMain() {
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
                <CategoryView name="Space X" description="If you know about universe then you will enjoy it." />
                <CategoryView name="Space X" description="If you know about universe then you will enjoy it." />
                <CategoryView name="Space X" description="If you know about universe then you will enjoy it." />
                <CategoryView name="Space X" description="If you know about universe then you will enjoy it." />
                <CategoryView name="Space X" description="If you know about universe then you will enjoy it." />
                <CategoryView name="Space X" description="If you know about universe then you will enjoy it." />
                <CategoryView name="Space X" description="If you know about universe then you will enjoy it." />
                <CategoryView name="Space X" description="If you know about universe then you will enjoy it." />
                <CategoryView name="Space X" description="If you know about universe then you will enjoy it." />
              </div>
            </div>


            <div className='bg-slate-100 h-[70.5vh] w-[42rem] rounded-lg shadow-lg p-5  '>
              <p className='text-lg font-bold'>Add/Edit Category</p>
              <form action="" className='flex flex-col gap-10 p-10 '>
                <Input placeholder='Category Name' name='categoryName' type='text'></Input>
                <Input placeholder='Category Description' name='categoryDescription' type='text'></Input>
                <button className='w-full h-12 bg-blue-600 hover:bg-blue-700 font-medium text-white transition-all ease-in-out duration-500 rounded-lg '>ADD / EDIT  CATEGORY</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminMain