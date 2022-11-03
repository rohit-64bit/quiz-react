import React from 'react'
import { Link } from 'react-router-dom'

function LearnVideo(props) {
    return (
        <>
            <div className='flex flex-col gap-4 rounded-lg shadow-sm hover:shadow-lg shadow-slate-400 border-[1px] h-80 w-72 justify-between bg-slate-50 transition-all ease-in-out duration-500'>


                <img src={props.imgThumbnail} className="w-auto rounded-lg" alt="" />
                <div className='px-5'>
                    <p className='font-bold text-xl'>{props.title}</p>
                    <p className='text-sm'>{props.description}</p>
                </div>

                <a href={props.videoLink} className='' target="_blank">
                    <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-10 w-72 rounded-b-lg text-center text-white font-medium hover:shadow-lg'>
                        WATCH VIDEO
                    </button>
                </a>
            </div>
        </>
    )
}

export default LearnVideo