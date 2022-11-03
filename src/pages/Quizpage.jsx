import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Question from '../components/Question'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Quizon() {
    function submitQuiz() {
        console.log("Quiz Submited Succesfully");
    }
    function nextQuestion(){
        
    }
    return (
        <>
            <div className='p-10 flex flex-col gap-10'>

                {/* timer the timer should be reseted once the question changes they can submit the quiz at any question */}
                <div className="flex justify-end">
                    <button className='bg-green-700 hover:bg-green-800 transition-all ease-in-out text-white text-lg font-medium rounded-lg w-48 h-12 my-auto' onClick={submitQuiz}>Finish</button>
                </div>
                <Question questionNo="1" question="Who is the PM of India ?" option1="Narendra Modi" option2="Sonia Gandhi" option3="Arvind Kejriwal" option4="Amit Saha" />

                
                <div className='flex justify-around'>
                <button className='font-medium outline outline-1 outline-slate-700 rounded-md w-20 h-10 hover:bg-orange-600 hover:text-white transition-all ease-in-out mx-auto' onClick={nextQuestion} >Next &rarr; </button>
                </div>


            </div>
        </>
    )
}

export default Quizon