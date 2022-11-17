import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'




function Level() {

    const location = useLocation();
    const { category } = location.state;

    const {name,description} = category;



    return (
        <>
            <Header />
            <div className="flex">
                <SideBar />
                <div className='p-10 grid grid-cols-3 gap-5 overflow-y-auto h-[89.5vh] w-screen'>
                    <div className='px-6 py-10 transition-all ease-in-out duration-300 flex flex-col gap-5 hover:shadow-lg rounded-lg outline-2 bg-slate-100 h-max '>
                        <div className='text-lg font-medium '>Category : <span>{name}</span></div>
                        <div className='text-lg font-medium '>Level : <span>{description}</span></div>
                        <Link to='/quiz' state={{categoryID : category._id}}>
                            <div className='bg-slate-600 hover:bg-slate-700 transition-all ease-in-out duration-300 px-3 py-1 w-full font-medium text-center text-white rounded-md'>Enter Quiz</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Level