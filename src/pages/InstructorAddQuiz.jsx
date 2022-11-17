import { Input } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'



function InstructorAddQuiz() {
    // calculating question numbers on the frontend
    let [questionNo, setQuestionNo] = useState([])

    const onAddBtnClick = async (e) => {
        e.preventDefault();
        setDetails(input)
        setQuestionNo(questionNo.concat(""));
        setQuestions(questions.concat(details))
    };


    // defining input for the users
    const [input, setInput] = useState({
        questionInput: "",
        option1: "",
        option1C: undefined,
        option2: "",
        option2C: undefined,
        option3: "",
        option3C: undefined,
        option4: "",
        option4C: undefined
    })

    // object of input
    let onChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }



    let [details, setDetails] = useState([{

        questionText: input.questionInput,
        answerOptions: [
            {
                answerText: input.option1,
                isCorrect: input.option1C
            },
            {
                answerText: input.option2,
                isCorrect: input.option2C
            },
            {
                answerText: input.option3,
                isCorrect: input.option3C
            },
            {
                answerText: input.option4,
                isCorrect: input.option4C
            }
        ]
    }])



    // quiz adding to hooks
    const handleForm = (e) => {
        e.preventDefault();
    }




    // this holds array of all the questions
    let [questions, setQuestions] = useState([])



    // this holds all the data to be sent to the backend
    let data = {
        name: "hello world",
        category: "compouter",
        level: "easy",
        questions: questions
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:1000/api/quiz/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('instructorToken')
            },
            body: JSON.stringify(data)
        });
    }




    // This block will be used to send data to the backend



    return (
        <>
            <Header details="MANAGE QUIZ" />
            <div className='flex'>
                <SidebarInstructor />
                <div className='px-10 py-5 overflow-y-auto gap-8 h-[89.5vh] w-screen'>
                    <div className='flex justify-between'>
                        <div className="flex gap-10">
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Quiz Category</p>
                                <div className='font-medium'>Science</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Quiz Description</p>
                                <div className='font-medium'>Science</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Level</p>
                                <div className='font-medium'>Easy</div>
                            </div>
                            <div>
                                <p className='text-slate-500 font-medium text-xs'>Total Questions added (minimum 5 questions)</p>
                                <div className='font-medium'>{questionNo.length}</div>
                            </div>
                        </div>
                        {questionNo.length >= 5 ? <button className='text-center bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded-md  transition-all ease-in-out duration-300' onClick={handleSubmit}>Save & Publish</button> : <div></div>}

                    </div>


                    <form action="" onSubmit={handleForm} className='my-7 flex flex-col w-[90%] gap-5 bg-slate-100 rounded-lg'>

                        <div className='border-b-2 py-5 px-10 text-lg font-medium flex justify-between'>
                            <span className='my-auto'> Question {questionNo.length + 1}</span>
                            <button className='text-center my-auto bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded-md  transition-all ease-in-out duration-300' type='submit' onClick={onAddBtnClick}>Add Question</button>
                        </div>

                        <div className='py-5 px-10 w-full'>
                            <div>
                                <input name='questionInput' type="text" placeholder='Type Question' className='text-base font-medium px-7 h-14 w-[100%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' value={input.questionInput} onChange={onChangeInput} />
                            </div>
                            <div className='mb-2 font-medium mt-5'>:: Option :: Check the check box for correct option</div>
                            <span className='flex flex-col gap-3'>
                                <div className='flex gap-5'>
                                    <div className='my-auto mx-5 font-bold text-lg'>A</div>
                                    <input name='option1' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-[95%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' value={input.option1} onChange={onChangeInput} />
                                    <input type="text" value={input.option1C} onChange={onChangeInput} className='text-base font-medium px-1 h-14 w-[5%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                                </div>
                                <div className='flex gap-5'>
                                    <div className='my-auto mx-5 font-bold text-lg'>B</div>
                                    <input name='option2' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-[95%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' value={input.option2} onChange={onChangeInput} />
                                    <input type="text" value={input.option2C} onChange={onChangeInput} className='text-base font-medium px-1 h-14 w-[5%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                                </div>
                                <div className='flex gap-5'>
                                    <div className='my-auto mx-5 font-bold text-lg'>C</div>
                                    <input name='option3' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-[95%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' value={input.option3} onChange={onChangeInput} />
                                    <input type="text" value={input.option3C} onChange={onChangeInput} className='text-base font-medium px-1 h-14 w-[5%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                                </div>
                                <div className='flex gap-5'>
                                    <div className='my-auto mx-5 font-bold text-lg'>D</div>
                                    <input name='option4' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-[95%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' value={input.option4} onChange={onChangeInput} />
                                    <input type="text" value={input.option4C} onChange={onChangeInput} className='text-base font-medium px-1 h-14 w-[5%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                                </div>
                            </span>
                        </div>
                    </form>


                </div>

            </div>
        </>
    )
}

export default InstructorAddQuiz