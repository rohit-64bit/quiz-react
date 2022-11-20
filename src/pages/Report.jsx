import { Accordion, AccordionDetails, AccordionSummary, Button, Menu, MenuItem, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import SideBar from '../components/SideBar'
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Header from "../components/Header"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryContext from '../context/category/categoryContext';
import notdatafound from "../assets/images/undraw_no_data_re_kwbl.svg"
import { Link } from 'react-router-dom';


function UserReport(props) {
    return (
        <>
            <div className='flex w-full h-max justify-between bg-slate-100 hover:bg-slate-800 hover:text-white p-5 rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 border-2 '>
                <div className="flex gap-10 my-auto">
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Quiz Category</p>
                        <div className='font-medium'>{props.quizCategory}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Level</p>
                        <div className='font-medium'>{props.quizLevel}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Correct Answer</p>
                        <div className='font-medium'>{props.correctAnswer}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Score</p>
                        <div className='font-medium'>{props.quizScore}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Report() {

    const context = useContext(CategoryContext)
    const { getUserProfile, user } = context;

    const ignored = {
        id: user._id
    }
    useEffect(() => {
        getUserReport(ignored.id)
        getUserProfile("userToken")
    }, [ignored.id])

    const reportFetched = []
    const [report, setReport] = useState(reportFetched)
    const getUserReport = async (id) => {
        const response = await fetch(`http://localhost:1000/api/userreport/fetch/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("userToken")
            }
        });
        const json = await response.json();
        setReport(json);
    }




    console.log(report);


    return (
        <>
            <Header details="YOUR REPORT" />
            <div className="flex">
                <SideBar />

                {report.length ?
                    <div className='p-10 overflow-y-auto flex flex-col gap-5 h-[89.5vh] w-screen'>
                        {report.map((data) => {
                            return (
                                <UserReport correctAnswer={data.correctAns} quizCategory={data.category} quizLevel={data.level} quizScore={data.finalScore} />
                            )
                        })}
                    </div>
                    :
                    <div className='p-10 flex flex-col gap-10 h-[89.5vh] w-screen'>
                        <img src={notdatafound} alt="" className='w-[25%] mx-auto' />
                        <div className='mx-auto text-2xl font-medium'>Hey! {user.name} nothing to show here</div>
                        <Link to="/" className='mx-auto px-5 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-500 hover:translate-y-1'>TAKE A QUIZ</Link>
                    </div>
                }



            </div>
        </>
    )
}

export default Report