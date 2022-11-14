import { Input } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'


function AddedQuestions(props) {

    return (
        <>
            <div className='flex flex-col w-full gap-5 bg-slate-100 rounded-lg'>
                <div className='border-b-2 py-5 px-10 text-lg font-medium'>Question {props.qNo}</div>
                <form action="" className='py-5 px-10'>
                    <div>
                        <input name='question' type="text" placeholder='Type Question' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                    </div>
                    <div className='mb-2 font-medium mt-5'>:: Option :: Check the check box for correct option</div>
                    <span className='flex flex-col gap-3'>
                        <div className='flex'>
                            <div className='my-auto mx-5 font-bold text-lg'>A</div>
                            <input name='option1' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                            <input type="checkbox" className='h-6 w-6 my-auto mx-5' />
                        </div>
                        <div className='flex'>
                            <div className='my-auto mx-5 font-bold text-lg'>B</div>
                            <input name='option2' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                            <input type="checkbox" className='h-6 w-6 my-auto mx-5' />
                        </div>
                        <div className='flex'>
                            <div className='my-auto mx-5 font-bold text-lg'>C</div>
                            <input name='option3' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                            <input type="checkbox" className='h-6 w-6 my-auto mx-5' />
                        </div>
                        <div className='flex'>
                            <div className='my-auto mx-5 font-bold text-lg'>D</div>
                            <input name='option4' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                            <input type="checkbox" className='h-6 w-6 my-auto mx-5' />
                        </div>
                    </span>
                </form>
            </div>
        </>
    )
}

function InstructorAddQuiz() {
    let [questionAdd, setQuestionAdd] = useState([])

    // input taken will be stored here
    let [details, setDetails] = useState({
        questionText : ""
    })

    // this holds array of all the questions
    let [questions, setQuestions] = useState([])


    const onAddBtnClick = (e) => {
        e.preventDefault();
        setQuestionAdd(questionAdd.concat(""));
        setQuestions(questions.concat(details))
        setDetails({})
    };

    // this holds all the data to be sent to the backend
    const [data, setData] = useState({
        name: "hello world",
        category: "compouter",
        level: "easy",
        questions: questions
    })

    // This block will be used to send data to the backend
    const handleSubmit = (e) => {
        e.preventDefault();
    }



    let onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    console.log(data)

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
                                <div className='font-medium'>{questionAdd.length}</div>
                            </div>
                        </div>
                        {questionAdd.length >= 5 ? <button className='text-center bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded-md  transition-all ease-in-out duration-300' onClick={handleSubmit}>Save & Publish</button> : <div></div>}

                    </div>


                    <form action="" onSubmit={handleSubmit} className='my-7 flex flex-col w-full gap-5 bg-slate-100 rounded-lg'>

                        <div className='border-b-2 py-5 px-10 text-lg font-medium flex justify-between'>
                            <span className='my-auto'> Question {questionAdd.length + 1}</span>
                            <button className='text-center my-auto bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded-md  transition-all ease-in-out duration-300' type='submit' onClick={onAddBtnClick}>Add Question</button>
                        </div>

                        <div className='py-5 px-10'>
                            <div>
                                <input name='questionText' type="text" placeholder='Type Question' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' onChange={onChange} />
                            </div>
                            <div className='mb-2 font-medium mt-5'>:: Option :: Check the check box for correct option</div>
                            <span className='flex flex-col gap-3'>
                                <div className='flex'>
                                    <div className='my-auto mx-5 font-bold text-lg'>A</div>
                                    <input name='option1' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' onChange={onChange} />
                                    <input type="checkbox" className='h-6 w-6 my-auto mx-5' />
                                </div>
                                <div className='flex'>
                                    <div className='my-auto mx-5 font-bold text-lg'>B</div>
                                    <input name='option2' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' onChange={onChange} />
                                    <input type="checkbox" className='h-6 w-6 my-auto mx-5' />
                                </div>
                                <div className='flex'>
                                    <div className='my-auto mx-5 font-bold text-lg'>C</div>
                                    <input name='option3' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' onChange={onChange} />
                                    <input type="checkbox" className='h-6 w-6 my-auto mx-5' />
                                </div>
                                <div className='flex'>
                                    <div className='my-auto mx-5 font-bold text-lg'>D</div>
                                    <input name='option4' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-full rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' onChange={onChange} />
                                    <input type="checkbox" className='h-6 w-6 my-auto mx-5' />
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