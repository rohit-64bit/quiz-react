import React, { useEffect, useState } from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import Header from "../components/Header"

function ManageUser(props) {
    return (
        <>
            <div className='flex w-full justify-between bg-slate-100 p-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 '>
                <div className='flex gap-5 my-auto'>
                    <p className='font-medium text-lg'>{props.name}</p>
                    <p className='font-medium text-lg'>{props.email}</p>
                    <p className='font-medium text-lg'>{props.contact}</p>
                </div>
                <div className='flex gap-5'>

                    <button className='p-1 transition-all ease-in-out duration-300 bg-slate-600 hover:bg-slate-700 text-white rounded-lg my-auto'><BlockIcon /></button>
                    <button className='p-1 transition-all ease-in-out duration-300 bg-red-600 hover:bg-red-700 text-white rounded-lg my-auto'><DeleteIcon /></button>
                </div>
            </div>
        </>
    )
}


function AdminUsers() {

    const host = "http://localhost:1000"
    const userFetched = []

    const [user, setUser] = useState(userFetched)

    // Get all user
    const getUser = async () => {
        // API Call 
        const response = await fetch(`${host}/api/user/fetch`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            }
        });
        const json = await response.json()
        setUser(json)
        console.log(json);
    }
    useEffect(() => {
        getUser();
    }, [])

    
          

    return (
        <>
            <Header />
            <div className='flex'>
                <SidebarAdmin />
                <div className='p-10 h-[89.5vh] flex flex-col w-screen'>
                    <div className=''>
                        <p className='mb-5 font-bold'>admin/manage/instructor</p>
                    </div>
                    <div className='h-[95%] flex flex-col gap-5 overflow-y-auto my-10 px-5'>

                        {user.map((users) => {
                            return (
                                <ManageUser name={users.name} email={users.email} key={users._id} />
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsers