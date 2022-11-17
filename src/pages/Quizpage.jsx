import React, { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import Header from "../components/Header"
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';


function Quizon() {

    const location = useLocation();
    const { categoryID } = location.state;


    const quizData = {
        "name": "hello world",
        "category": "computer",
        "level": "easy",
        "questions": [
            {
                "questionText": "Which is oldest programming language",
                "answerOptions": [
                    {
                        "answerText": "C",
                        "isCorrect": true
                    },
                    {
                        "answerText": "Java",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "JavaScript",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "Python",
                        "isCorrect": undefined
                    }
                ]
            },
            {
                "questionText": "PM of India ?",
                "answerOptions": [
                    {
                        "answerText": "Narendra Modi",
                        "isCorrect": true
                    },
                    {
                        "answerText": "Rahul Gandhi",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "Arvind Kejriwal",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "hello world",
                        "isCorrect": undefined
                    }
                ]
            },
            {
                "questionText": "correct answer is option 2",
                "answerOptions": [
                    {
                        "answerText": "a",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "b",
                        "isCorrect": true
                    },
                    {
                        "answerText": "c",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "d",
                        "isCorrect": undefined
                    }
                ]
            },
            {
                "questionText": "correct answer is option 3",
                "answerOptions": [
                    {
                        "answerText": "a",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "b",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "c",
                        "isCorrect": true
                    },
                    {
                        "answerText": "d",
                        "isCorrect": undefined
                    }
                ]
            },
            {
                "questionText": "founder of tesla",
                "answerOptions": [
                    {
                        "answerText": "elon musk",
                        "isCorrect": "true"
                    },
                    {
                        "answerText": "undefined",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "sample",
                        "isCorrect": undefined
                    },
                    {
                        "answerText": "sample",
                        "isCorrect": undefined
                    }
                ]
            }
        ]
    }


    let [questionNo, setQuestionNo] = useState([])
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
    const totalQuestion = quizData.questions.length;

    function submitQuiz() {
        console.log("Quiz Submited Succesfully");
        console.log(score);
    }
    function nextQuestion() {
        setQuestionNo(questionNo.concat(""));
        setClick(undefined)
    }
    return (
        <>
            <Header />
            <div className='p-10 flex flex-col gap-10'>
                <div className="flex justify-between">

                    <div className="flex gap-10">
                        <div>
                            <p className='text-slate-500 font-medium text-xs'>Quiz Name</p>
                            <div className='font-medium'>{quizData.name}</div>
                        </div>
                        <div>
                            <p className='text-slate-500 font-medium text-xs'>Quiz Category</p>
                            <div className='font-medium'>{quizData.category}</div>
                        </div>
                        <div>
                            <p className='text-slate-500 font-medium text-xs'>Level</p>
                            <div className='font-medium'>{quizData.level}</div>
                        </div>
                        <div>
                            <p className='text-slate-500 font-medium text-xs'>Your Score</p>
                            <div className='font-medium'>{score}</div>
                        </div>
                    </div>

                    <Link
                        to='/score'
                        state={{ finalScore: score, correctAns: correctAns, quizCategory: quizData.category, quizLevel: quizData.quizLevel , totalQuestion : quizData.questions.length }}
                        className='bg-green-700 text-center py-3 hover:bg-green-800 duration-300 transition-all ease-in-out text-white text-lg font-medium rounded-lg w-48 my-auto' onClick={submitQuiz}>Finish</Link>
                </div>


                <div className='flex flex-col gap-10 p-10 w-[60%] mx-auto border-2 rounded-lg bg-slate-100 select-none'>
                    <p className='font-medium' >{questionNo.length + 1}. {quizData.questions[questionNo.length].questionText}</p>
                    <div className='flex flex-col gap-5'>

                        {quizData.questions[questionNo.length].answerOptions.map((ans, index) => {
                            return <button disabled={click} onClick={() => handleAnswerOption(ans.isCorrect)} key={index} className={`${click & ans.isCorrect ? "h-12 w-full bg-green-500 focus:bg-green-500 focus:text-white  border-2 border-green-500 rounded-full" : "h-12 w-full bg-white  focus:text-white  border-2 border-green-500 rounded-full"}`} >{ans.answerText}</button>
                        })}

                    </div>
                </div>


                <div className='flex justify-around'>
                    {totalQuestion === questionNo.length + 1 ? <div></div> : <button disabled={!click} className='font-medium outline outline-1 outline-slate-700 rounded-md w-20 h-10 hover:bg-orange-600 hover:text-white transition-all ease-in-out mx-auto' onClick={nextQuestion} >Next &rarr; </button>}

                </div>


            </div>
        </>
    )
}

export default Quizon