import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import CategoryContext from '../context/category/categoryContext';
import notvideofound from "../assets/images/undraw_functions_re_alho.svg"

function Videos() {
    // getting all categories
    const context = useContext(CategoryContext)
    const { videos, getVideoDetails, } = context;


    const location = useLocation();
    const { categoryID, categoryName } = location.state;
    console.log(location.state);


    useEffect(() => {
        getVideoDetails(categoryID, "userToken");
    }, [categoryID])


    return (
        <>
            <Header />
            <div className='flex'>
                <SideBar />
                {videos.length ? <div className='p-10 overflow-y-auto grid grid-cols-4 gap-8 h-[89.5vh] w-screen'>

                    {videos.map((options) => {
                        return (
                            <div key={options._id} className='flex flex-col gap-4 rounded-lg shadow-sm shadow-slate-400 border-[1px] h-max w-72 justify-between bg-slate-50 transition-all ease-in-out duration-500'>
                                <img src={options.imageLink} className="w-auto rounded-t-lg" alt="" />
                                <div className='px-5'>
                                    <p className='font-bold text-xl'>{options.title}</p>
                                    <p className='text-sm'>{options.categoryName}</p>
                                </div>
                                <Link to='/watchvideo' state={{ options: options }} className='' >
                                    <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-10 w-72 rounded-b-lg text-center text-white font-medium hover:shadow-lg hover:rounded-lg hover:translate-y-1'>
                                        WATCH VIDEO
                                    </button>
                                </Link>
                            </div>

                        )
                    })}



                </div>
                    :
                    <div className='p-20 flex flex-col gap-10 h-[89.5vh] w-screen '>
                        <img src={notvideofound} alt="" className='w-[30%] mx-auto' />
                        <div className='mx-auto text-2xl font-medium'>No Videos Found For Category : {categoryName}</div>
                        <Link to="/learn" className='mx-auto px-5 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-500 hover:translate-y-1'>RETURN TO LEARN</Link>
                    </div>
                }


            </div>
        </>
    )
}

export default Videos