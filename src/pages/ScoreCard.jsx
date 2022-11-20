import { Link, useLocation } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import Header from "../components/Header"
import CategoryContext from '../context/category/categoryContext';


function ScoreCard(props) {

  const location = useLocation();

  const { finalScore, correctAns, quizCategory, quizLevel, totalQuestion, category, level } = location.state;

  const context = useContext(CategoryContext)
  const { getUserProfile, user } = context;
  useEffect(() => {
    getUserProfile("userToken")
  }, [])

  console.log(user);
  console.log(location.state);

  


  return (
    <>
      <Header />
      <div className='bg-[url("/src/assets/bg/bghome.jpeg")] bg-cover bg-fixed bg-no-repeat h-[89.3vh] p-20 flex flex-col justify-between'>
        <div className='mx-auto '>
          <p className='text-center font-medium'>Your Score</p>
          <div className='text-center font-medium text-6xl'>{finalScore}</div>
          <p className='text-sm mt-10'>Correct Answers : {correctAns} / {totalQuestion}</p>
        </div>
        <Link to="/quizes" className='mx-auto w-max'>
          <button className='bg-white transition-all ease-in-out duration-200 h-9 w-52 rounded-md text-center outline outline-1 outline-slate-300 font-medium hover:shadow-lg text-blue-800 m-auto'>Enter Another Quiz</button>
        </Link>
      </div>
    </>
  )
}

export default ScoreCard