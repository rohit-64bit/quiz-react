import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import CategoryContext from '../context/category/categoryContext'
import notfound from "../assets/images/undraw_not_found_re_bh2e.svg"
import SERVER_URL from '../services/Helper'

function LevelComponent(props) {

    const [levelReport, setLevelReport] = useState([])

    const getLevelReport = async (data) => {
        const response = await fetch(`${SERVER_URL}/api/userreport/fetch/reports/levels`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("userToken")
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        setLevelReport(json);
        console.log(json);
    }

    const details = {
        quizLevel: props.id,
        userID: props.userID
    }

    useEffect(() => {
        console.log(details);
        getLevelReport(details)
    }, [])

    return (
        <div className='px-6 py-10 transition-all ease-in-out duration-300 flex flex-col gap-5 hover:shadow-lg rounded-lg outline-2 bg-slate-100 h-max '>

            <div className='flex justify-between'>
                <div className='text-lg font-medium '>Category : <span>{props.nameCategory}</span></div>
                <div className='text-lg font-medium '>
                    {
                        levelReport.finalScore ? <div>Score : <span>{levelReport.finalScore}</span></div> : <div></div>
                    }
                </div>
            </div>
            <div className='text-lg font-medium '>Level : <span>{props.nameLevel}</span></div>
            <Link to='/quiz' state={{ categoryID: props.categoryID, levelID: props.id, category: props.nameCategory, level: props.nameLevel }}>
                <div className='bg-slate-600 hover:bg-slate-700 transition-all ease-in-out duration-300 px-3 py-1 w-full font-medium text-center text-white rounded-md'>Enter Quiz</div>
            </Link>
        </div>
    )
}


function Level() {
    const context = useContext(CategoryContext)
    const { setCategory, editCategory, getCategory, level, getLevelDetails, deleteCategory, getUserProfile, user } = context;
    const location = useLocation();

    const { category } = location.state;

    const { name, description, _id } = category;


    useEffect(() => {
        getUserProfile("userToken")
        getLevelDetails("userToken", category._id);
    }, [])



    return (
        <>
            <Header />
            <div className="flex">
                <SideBar />
                {level.length ? <div className='p-10 grid grid-cols-3 bg-[url("/src/assets/bg/undraw_online_learning_re_qw08.svg")] bg-inherit bg-right-bottom bg-fixed bg-no-repeat gap-5 overflow-y-auto h-[89.5vh] w-screen'>
                    {level.map((data) => {
                        return (
                            <LevelComponent key={data._id} id={data._id} categoryID={category._id} nameCategory={category.name} nameLevel={data.name} userID={user._id} />
                        )
                    })}
                </div>
                    :
                    <div className='p-20 flex flex-col gap-10 h-[89.5vh] w-screen '>
                        <img src={notfound} alt="" className='w-[30%] mx-auto' />
                        <div className='mx-auto text-2xl font-medium'>No Quiz Found For Category : {name}</div>
                        <Link to="/" className='mx-auto px-5 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-500 hover:translate-y-1'>RETURN TO HOME</Link>
                    </div>
                }

            </div>
        </>
    )
}

export default Level