import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SidebarAdmin from '../components/SidebarAdmin'

function UserReport(props) {
    return (
        <>
            <div className='flex w-full h-max justify-between bg-slate-100 p-5 rounded-lg hover:shadow-lg hover:bg-slate-800 hover:text-white transition-all ease-in-out duration-300 border-2 '>
                <div className="flex gap-10 my-auto">
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>User Name</p>
                        <div className='font-medium'>{props.userName}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>User Email</p>
                        <div className='font-medium'>{props.userEmail}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Quiz Category</p>
                        <div className='font-medium'>{props.quizName}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Level</p>
                        <div className='font-medium'>{props.quizLevel}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>Score</p>
                        <div className='font-medium'>{props.quizScore}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>User ID</p>
                        <div className='font-medium'>{props.userID}</div>
                    </div>
                    <div>
                        <p className='text-slate-500 font-medium text-xs'>ID (This can be used for manual verification) </p>
                        <div className='font-medium'>{props.id}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

function AdminAnalytics() {

    const reportFetched = []
    const [report, setReport] = useState(reportFetched)
    const getUserReport = async () => {
        const response = await fetch(`http://localhost:1000/api/userreport/fetch/reports`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            }
        });
        const json = await response.json();
        setReport(json);
        console.log(json);
    }

    useEffect(() => {
        getUserReport()
    }, [])

    return (
        <>
            <Header details="USER REPORTS" />
            <div className='flex'>
                <SidebarAdmin />
                <div className='p-10 overflow-y-auto flex flex-col gap-8 h-[89.5vh] w-screen'>

                    {report.map((data) => {
                        return (
                            <UserReport key={data._id} id={data._id} userEmail={data.email} userName={data.userName} userID={data.userID} quizName={data.category} quizLevel={data.level} quizScore={data.finalScore} />
                        )
                    })}


                </div>

            </div>
        </>
    )
}

export default AdminAnalytics