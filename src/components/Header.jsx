import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';



function Header(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className='flex p-5 justify-between bg-slate-100 outline outline-1 outline-slate-300 '>
                <Link to="/" className='font-bold flex text-xl my-auto'>TAKE YOUR QUIZ <p className='ml-2 text-blue-600  text-base my-auto'>{props.user}</p></Link>

                <div className='flex gap-10 my-auto'>
                    {/* <div className='flex gap-5 my-auto  '>
                        <Link to="/" className='hover:translate-y-1 transition-all ease-in-out'>HOME</Link>
                        <Link to="/" className='hover:translate-y-1 transition-all ease-in-out'>QUIZES</Link>
                        <Link to="/" className='hover:translate-y-1 transition-all ease-in-out'>PROFILE</Link>
                        <Link to="/" className='hover:translate-y-1 transition-all ease-in-out'>ABOUT</Link>
                    </div> */}
                    <div className="flex gap-5">
                        <Link to="/signup">

                            <button className='bg-white transition-all ease-in-out duration-200 h-9 w-28 rounded-md text-center outline outline-1 outline-slate-300 font-medium hover:shadow-lg text-blue-800'>SIGN UP</button>
                        </Link>
                        <Link to="/signin">

                            <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-9 w-28 rounded-md text-center text-white font-medium hover:shadow-lg'>SIGN IN</button>
                        </Link>

                        <Avatar onClick={handleClick} sx={{ width: 36, height: 36, padding: 0 }}>M</Avatar>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            
                            <MenuItem>
                            <Link to="/myprofile">

                                My Profile
                            </Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/editprofile">

                                Edit Profile
                            </Link>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <Logout fontSize="small" /><p className='mx-1 my-auto'>Logout</p>
                            </MenuItem>
                        </Menu>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Header