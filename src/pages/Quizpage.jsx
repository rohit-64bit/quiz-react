import React, { useContext, useEffect, useState } from 'react'
import Header from "../components/Header"
import { Link, useLocation } from 'react-router-dom';
import CategoryContext from '../context/category/categoryContext';


function Quizon() {

    const location = useLocation();
    const { categoryID, levelID, category } = location.state;

    const context = useContext(CategoryContext)
    const { getUserProfile, user, quiz, getQuiz } = context;



    let [questionNo, setQuestionNo] = useState(0)
    const [score, setScore] = useState(0)
    const [correctAns, setCorrectAns] = useState(0)
    const [click, setClick] = useState(undefined)


    const handleAnswerOption = (isCorrect) => {
        setClick(undefined)
        if (isCorrect) {
            setScore(score + 5)
            setCorrectAns(correctAns + 1)
        }
        setClick(true)
    }

    const { questions } = quiz;


    // const totalQuestion = quiz.questions.length;

    function nextQuestion() {
        setQuestionNo(questionNo + 1);
        setClick(undefined)
    }


    const handleReportSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:1000/api/userreport/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('userToken')
            },
            body: JSON.stringify({ userID: user._id, userName: user.name, email: user.email, finalScore: score, correctAns: correctAns, quizCategory: quiz.category, quizLevel: quiz.level, totalQuestion: quiz.questions?.length, category: quiz.categoryName, level: quiz.levelName })
        });
        const json = await response.json()
    }

    useEffect(() => {
        getUserProfile("userToken")
        getQuiz(levelID, 'userToken')
        console.log(quiz.questions);
    }, [])


    // let question = quiz?.questions;

    return (
        <>
            <Header />
            <div className='p-10 flex flex-col gap-10'>
                <div className="flex justify-between">

                    <div className="flex gap-10">
                        <div>
                            <p className='text-slate-500 font-medium text-xs'>Quiz Category</p>
                            <div className='font-medium'>{quiz.categoryName}</div>
                        </div>
                        <div>
                            <p className='text-slate-500 font-medium text-xs'>Level</p>
                            <div className='font-medium'>{quiz.levelName}</div>
                        </div>
                        <div>
                            <p className='text-slate-500 font-medium text-xs'>Your Score</p>
                            <div className='font-medium'>{score}</div>
                        </div>
                        <div>
                            <p className='text-slate-500 font-medium text-xs'>Question</p>
                            <div className='font-medium'>{questionNo + 1} / {quiz.questions?.length}</div>
                        </div>
                    </div>


                    {questionNo === quiz.questions?.length - 1 ?
                        <Link
                            to='/score'
                            onClick={handleReportSubmit}
                            state={{ finalScore: score, correctAns: correctAns, quizCategory: quiz.category, quizLevel: quiz.level, totalQuestion: quiz.questions?.length, category: quiz.categoryName, level: quiz.levelName }}
                            className='bg-green-700 text-center py-3 hover:bg-green-800 duration-300 transition-all ease-in-out text-white text-lg font-medium rounded-lg w-48 my-auto'
                        >Finish</Link>
                        : <div></div>
                    }
                </div>


                {quiz && quiz.questions ?
                    <div>
                        <div className='flex flex-col gap-10 p-10 w-[60%] mx-auto border-2 rounded-lg bg-slate-100 select-none'>
                            <p className='font-medium' >{questionNo + 1}. {quiz.questions[questionNo].questionText}</p>

                            <div className='flex flex-col gap-5'>

                                {quiz.questions[questionNo].answerOptions.map((ans, index) => {
                                    return <button disabled={click} onClick={() => handleAnswerOption(ans.isCorrect)} key={index} className={`${click & ans.isCorrect != "" ? "h-12 w-full bg-green-500 focus:bg-green-500 focus:text-white  border-2 border-green-500 rounded-full" : "h-12 w-full active:bg-red-600 focus:text-red-600  border-2 border-green-500 rounded-full"}`} >{ans.answerText}</button>
                                })}

                            </div>
                        </div>


                        <div className='flex justify-around mt-10'>
                            {quiz.questions?.length === questionNo + 1 ? <div></div> : <button disabled={!click} className='font-medium outline outline-1 outline-slate-700 rounded-md w-20 h-10 hover:bg-orange-600 hover:text-white transition-all ease-in-out mx-auto' onClick={nextQuestion} >Next &rarr; </button>}

                        </div>
                    </div>
                    :
                    <div>Quiz Loading</div>
                }


            </div>



        </>
    )
}

export default Quizon