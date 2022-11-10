import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import Quiz from '../components/Quiz'
import SideBar from '../components/SideBar'
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Header from "../components/Header"


function Report() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [category, setCategory] = useState("CATEGORY")
    const [difficulty, setDifficulty] = useState("DIFFICULTY")

    return (
        <>
            <Header details="YOUR REPORT" />
            <div className="flex">
                <SideBar />
                <div className='p-10 grid grid-cols-5 gap-5 overflow-y-auto h-[89.5vh] w-screen'>
                    
                    <Quiz topic="Science" description="Hello this is the category science quiz" theme="yellow" />
                </div>
            </div>
        </>
    )
}

export default Report