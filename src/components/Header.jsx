import { Avatar } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import CategoryContext from '../context/category/categoryContext';


function Header(props) {
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    // getting user details

    const context = useContext(CategoryContext)
    const { getUserProfile, user } = context;
    useEffect(() => {
        getUserProfile("userToken")
    }, [])


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("userToken");
        navigate({ pathname: "/signin" });
    }

    return (
        <>
            <div className='flex p-5 justify-between bg-slate-100 outline outline-1 outline-slate-300 '>
                <Link to="/" className='font-bold flex text-xl my-auto'>TAKE YOUR QUIZ <p className='ml-2 text-blue-600  text-base my-auto'>{props.details}</p></Link>

                <div className='flex gap-10 my-auto'>

                    {!localStorage.getItem('userToken') ?
                        <div className="flex gap-5">
                            <Link to="/signup">

                                <button className='bg-white transition-all ease-in-out duration-200 h-9 w-28 rounded-md text-center outline outline-1 outline-slate-300 font-medium hover:shadow-lg text-blue-800'>SIGN UP</button>
                            </Link>
                            <Link to="/signin">

                                <button className='bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 h-9 w-28 rounded-md text-center text-white font-medium hover:shadow-lg'>SIGN IN</button>
                            </Link>
                        </div>
                        :
                        <Avatar onClick={handleClick} sx={{ width: 36, height: 36, padding: 0 }}></Avatar>
                    }



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
                        <MenuItem onClick={handleLogout}>
                            <Logout fontSize="small" /><p className='mx-1 my-auto'>Logout</p>
                        </MenuItem>
                    </Menu>


                </div>

            </div>

        </>
    )
}

export default Header