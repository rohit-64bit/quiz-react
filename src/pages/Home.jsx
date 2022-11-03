import React from 'react'
import { Link } from 'react-router-dom'
import cmpImg from "../assets/images/undraw_online_test_re_kyfx.svg"

function Home() {
  return (
    <>
      <div className='bg-[url("/src/assets/bg/bghome.jpeg")] bg-cover bg-fixed bg-no-repeat h-max p-10'>
        <p className='text-center font-bold text-4xl mb-5'>Take Up A Quiz</p>
        <div className='w-96 border-t-4 border-blue-600 mx-auto my-8'></div>
        <p className='text-center font-thin text-4xl text-blue-400 mt-5 '>COMPLETE AND GROW</p>
        <img src={cmpImg} alt="" className='mx-auto h-52 my-20' />
        <div className='flex justify-center'>
          <Link to="/quizes">
          <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-12 w-44 rounded-md text-center text-white font-medium hover:shadow-lg object-center'>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home