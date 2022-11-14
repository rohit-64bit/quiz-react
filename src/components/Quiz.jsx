import React from 'react'
import { Link } from 'react-router-dom'

function Quiz(props) {
    return (
        <>
            <Link to="/quiz" className="h-48 w-56 hover:shadow-lg transition-all ease-in duration-300 bg-gradient-to-t from-slate-600 to-slate-500 p-5 text-white rounded-3xl flex flex-col justify-around">
                <div className='text-lg font-bold'>
                    {props.name}
                </div>
                <div>{props.description}</div>
            </Link>
        </>
    )
}

export default Quiz