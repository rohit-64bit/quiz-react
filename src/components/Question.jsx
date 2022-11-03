
import React from 'react'

function Question(props) {
    return (
        <>
            
            <div className='flex flex-col gap-10 p-10 w-[60%] mx-auto border-2 rounded-lg bg-slate-100 select-none'>
                <p className='font-medium' >{props.questionNo}. {props.question}</p>
                <div className='flex flex-col gap-5'>
                    <button className='h-12 w-full bg-white focus:bg-green-500 focus:text-white  border-2 border-green-500 rounded-full'>{props.option1}</button>
                    <button className='h-12 w-full bg-white focus:bg-green-500 focus:text-white  border-2 border-green-500 rounded-full'>{props.option2}</button>
                    <button className='h-12 w-full bg-white focus:bg-green-500 focus:text-white  border-2 border-green-500 rounded-full'>{props.option3}</button>
                    <button className='h-12 w-full bg-white focus:bg-green-500 focus:text-white  border-2 border-green-500 rounded-full'>{props.option4}</button>

                </div>
            </div>
            
        </>
    )
}

export default Question