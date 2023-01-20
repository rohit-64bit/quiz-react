import { Input } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import SidebarInstructor from '../components/SidebarInstructor'
import CategoryContext from '../context/category/categoryContext'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import SERVER_URL from '../services/Helper'



function InstructorAddQuiz() {
    const navigate = useNavigate();
    // calling functions from context
    const context = useContext(CategoryContext)
    const { categoryData, getCategoryDetails, quiz, getQuiz } = context;
    const location = useLocation();
    const { category, level, name, levelID } = location.state;

    const [detailsFormat, setDetailsFormat] = useState([])

    // calling the get category details function
    useEffect(() => {
        getCategoryDetails(category, "AuthInstructor")
        console.log(categoryData);
        // getQuiz(levelID, 'AuthInstructor')
    }, [])



    let [questionNo, setQuestionNo] = useState([])

    let [questions, setQuestions] = useState([])



    // defining input for the users
    const [input, setInput] = useState({
        questionInput: "",
        option1: "",
        option1C: "",
        option2: "",
        option2C: "",
        option3: "",
        option3C: "",
        option4: "",
        option4C: ""
    })

    // object of input



    let details = {

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
    }


    let data = {
        categoryName: name,
        category: category,
        levelName: level,
        level: levelID,
        questions: questions
    }

    let onChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const onAddBtnClick = async (e) => {
        e.preventDefault();
        setDetailsFormat(details)
        setQuestionNo(questionNo.concat(""));
        setQuestions(questions.concat(details))
        console.log(details);
        setInput({
            questionInput: "",
            option1: "",
            option1C: "",
            option2: "",
            option2C: "",
            option3: "",
            option3C: "",
            option4: "",
            option4C: ""
        })
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        const response = await fetch(`${SERVER_URL}/api/quiz/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('AuthInstructor')
            },
            body: JSON.stringify(data)
        });
        const json = await response.json()
        navigate('/instructor/home')
        window.alert("Quiz Added Succesfully")
    }


    // prevent relaod
    const handleForm = (e) => {
        e.preventDefault();
    }





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
                                        <div className='font-medium'>{categoryData.name}</div>
                                    </div>
                                    <div>
                                        <p className='text-slate-500 font-medium text-xs'>Quiz Description</p>
                                        <div className='font-medium'>{categoryData.description}</div>
                                    </div>
                                    <div>
                                        <p className='text-slate-500 font-medium text-xs'>Level</p>
                                        <div className='font-medium'>{level}</div>
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
                                            <input type="text" name='option1C' value={input.option1C} onChange={onChangeInput} className='text-base font-medium px-1 h-14 w-[5%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />

                                        </div>
                                        <div className='flex gap-5'>

                                            <div className='my-auto mx-5 font-bold text-lg'>B</div>
                                            <input name='option2' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-[95%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' value={input.option2} onChange={onChangeInput} />

                                            <input type="text" name='option2C' value={input.option2C} onChange={onChangeInput} className='text-base font-medium px-1 h-14 w-[5%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />

                                        </div>
                                        <div className='flex gap-5'>
                                            <div className='my-auto mx-5 font-bold text-lg'>C</div>
                                            <input name='option3' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-[95%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' value={input.option3} onChange={onChangeInput} />
                                            <input type="text" name='option3C' value={input.option3C} onChange={onChangeInput} className='text-base font-medium px-1 h-14 w-[5%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
                                        </div>
                                        <div className='flex gap-5'>
                                            <div className='my-auto mx-5 font-bold text-lg'>D</div>
                                            <input name='option4' type="text" placeholder='Type Options' className='text-base font-medium px-7 h-14 w-[95%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' value={input.option4} onChange={onChangeInput} />
                                            <input type="text" name='option4C' value={input.option4C} onChange={onChangeInput} className='text-base font-medium px-1 h-14 w-[5%] rounded-lg shadow-xl shadow-slate-200  border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 ease-in-out ' />
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