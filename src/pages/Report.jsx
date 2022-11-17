import { Accordion, AccordionDetails, AccordionSummary, Button, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import Quiz from '../components/Quiz'
import SideBar from '../components/SideBar'
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Header from "../components/Header"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
                <div className='p-10 overflow-y-auto h-[89.5vh] w-screen'>

                    <Accordion className='bg-slate-100 text-lg'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <div >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    
                </div>
            </div>
        </>
    )
}

export default Report