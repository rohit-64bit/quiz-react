import React, { useState } from 'react'

import CategoryContext from './categoryContext'

const CategoryState = (props) => {
    const host = "http://localhost:1000"

    // multiple category fetched

    const [notification, setNotification] = useState({})

    const categoryFetched = []

    const [category, setCategory] = useState(categoryFetched)

    // Get all category
    const getCategory = async (token) => {
        // API Call 
        const response = await fetch(`${host}/api/category/fetch`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem(token)
            }
        });
        const json = await response.json()
        setCategory(json)
    }


    // Delete a Note
    const deleteCategory = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/category/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            }
        });
        const json = response.json();

        if (json) {
            setNotification({ message: "Category Deleted Successfully", type: 'success', status: 'true' })
        } else {
            setNotification({ message: "Something Went Wrong", type: 'error', status: 'true' })
        }


        const newCategory = category.filter((category) => { return category._id !== id })
        setCategory(newCategory)
    }


    // get user details
    const userFetched = {}
    const [user, setUser] = useState(userFetched)


    const getUserProfile = async (token) => {
        // API Call 
        const response = await fetch(`${host}/api/auth/user/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem(token)
            }
        });
        const json = await response.json()
        // console.log(json);
        setUser(json)
    }


    // instructor fetched
    const instructorFetched = {}
    const [instructor, setInstructor] = useState(instructorFetched)


    const getInstructorProfile = async (token) => {
        // api call
        const response = await fetch(`${host}/api/auth/instructor/getinstructor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem(token)
            }
        });
        const json = await response.json();
        setInstructor(json)
    }


    const categoryDetails = []


    const [categoryData, setCategoryData] = useState(categoryDetails)


    const getCategoryDetails = async (id, token) => {
        const response = await fetch(`${host}/api/category/find/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem(token)
            }
        });
        const json = await response.json()
        setCategoryData(json)
        // console.log(json);
    }

    // Delete a Instructor
    const deleteInstructor = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/instructor/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            }
        });
        const json = response.json();
        if (json) {
            setNotification({ message: "Instructor Deleted Successfully", type: 'success', status: 'true' })
        } else {
            setNotification({ message: "Something Went Wrong", type: 'error', status: 'true' })
        }
        const newInstructor = instructor.filter((instructor) => { return instructor._id !== id })
        setInstructor(newInstructor)
    }

    // getting Videos details
    const videoFetched = []
    const [videos, setVideos] = useState(videoFetched)
    const getVideoDetails = async (category, token) => {
        const response = await fetch(`${host}/api/video/fetch/${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem(token)
            }
        });
        const json = await response.json();
        setVideos(json);
    }



    // Level will be fetched from here

    const levelFetched = []

    const [level, setLevel] = useState(levelFetched)

    const getLevelDetails = async (token, category) => {
        const response = await fetch(`${host}/api/level/fetch/${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem(token)
            },
        });
        const json = await response.json();
        setLevel(json);
    }


    const quizDetails = []
    const [quiz, setQuiz] = useState(quizDetails)


    const getQuiz = async (id, token) => {
        const response = await fetch(`${host}/api/quiz/fetch/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem(token)
            }
        });
        const json = await response.json()
        console.log(json.questions);
        setQuiz(json)
    }

    const userFetchedAll = []

    const [userAll, setUserAll] = useState(userFetchedAll)

    // Get all user
    const getUserAll = async () => {
        // API Call 
        const response = await fetch(`${host}/api/user/fetch`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            }
        });
        const json = await response.json()
        setUserAll(json)
        // console.log(json);
    }

    const deleteUser = async (id) => {
        const response = await fetch(`http://localhost:1000/api/user/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            }
        });
        const json = await response.json();
        if (json) {
            setNotification({ message: "User Deleted Successfully", type: 'success', status: 'true' })
        } else {
            setNotification({ message: "Something Went Wrong", type: 'error', status: 'true' })
        }
        const newUser = userAll.filter((user) => { return user._id !== id })
        setUserAll(newUser)

    }



    return (
        <CategoryContext.Provider value={{ category, setCategory, getCategory, deleteCategory, getUserProfile, user, videos, setVideos, getVideoDetails, instructor, getInstructorProfile, deleteInstructor, level, getLevelDetails, categoryData, getCategoryDetails, quiz, getQuiz, userAll, setUserAll, getUserAll, deleteUser, notification, setNotification }}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryState;