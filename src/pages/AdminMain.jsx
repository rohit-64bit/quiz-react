import React from 'react'
import SidebarAdmin from '../components/SidebarAdmin'

function AdminMain() {
  return (
    <>
      <div className='flex'>
        <SidebarAdmin />
        <div className='p-10'>
          <p>Admin/main</p>
          <div className='flex gap-5 w-max justify-between'>
            <div className='bg-slate-300 h-[70.5vh] w-[42rem] rounded-lg shadow-lg p-5  '>
            <button>Edit Category</button>
              
            </div>
            <div className='bg-slate-300 h-[70.5vh] w-[42rem] rounded-lg shadow-lg p-5  '>
            <button>Add Category</button>
            
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminMain