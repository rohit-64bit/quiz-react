import { Alert, Snackbar } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import CategoryContext from '../context/category/categoryContext';

function Notification() {

    const context = useContext(CategoryContext)
    const { getUserProfile, user, notification, setNotification } = context;

    const [nOpen, setNOpen] = useState(false);

    useEffect(() => {
        if (notification.status === "true") {
            setNOpen(true)
        }
    }, [notification])


    const handleNClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNOpen(false);
        // window.location.reload()
    };


    return (
        <>
            <Snackbar open={nOpen} autoHideDuration={4000} onClose={handleNClose}>
                <Alert onClose={handleNClose} severity={`${notification?.type}`} sx={{ width: '100%' }}>
                    {notification?.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Notification