import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import Quiz from '../components/Quiz'
import SideBar from '../components/SideBar'
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
            <div className="flex">
                <SideBar />
                <div className='w-screen p-10 '>
                    <p className='font-medium text-2xl'>YOUR REPORTS</p>


                    <div className="flex my-5 gap-10">
                        
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            endIcon={<ArrowDropDownIcon />}
                            sx={
                                {
                                    "border": 1,
                                }
                            }
                            className="border-2 text-black"
                        >
                            {category}
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem >Science</MenuItem>
                            <MenuItem >Sports</MenuItem>
                            <MenuItem >Politics</MenuItem>
                        </Menu>
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            endIcon={<ArrowDropDownIcon />}
                            sx={
                                {
                                    "border": 1,
                                }
                            }
                            className="border-2 text-black"
                        >
                            {difficulty}
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={e=>setDifficulty("LOW")}>LOW</MenuItem>
                            <MenuItem onClick={handleClose}>MEDIUM</MenuItem>
                            <MenuItem onClick={handleClose}>HIGH</MenuItem>
                        </Menu>
                    </div>


                    <div className='grid grid-cols-5 overflow-y-auto h-[89.5vh] '>
                        <Quiz topic="Science" description="Hello this is the category science quiz" theme="yellow" />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Report