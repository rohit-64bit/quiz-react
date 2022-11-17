import React, { useState } from 'react'

import CategoryContext from './categoryContext'

const CategoryState = (props) => {
    const host = "http://localhost:1000"
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
        const newCategory = category.filter((note) => { return note._id !== id })
        setCategory(newCategory)
    }

    // Edit a Note
    const editCategory = async (id, title, description) => {
        // API Call 
        const response = await fetch(`${host}/api/category/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("adminToken")
            },
            body: JSON.stringify({ title, description })
        });
        const json = await response.json();

        let newCategory = JSON.parse(JSON.stringify(category))
        // Logic to edit in client
        for (let index = 0; index < newCategory.length; index++) {
            const element = newCategory[index];
            if (element._id === id) {
                newCategory[index].title = title;
                newCategory[index].description = description;
                break;
            }
        }
        setCategory(newCategory);
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
        setUser(json)
    }

    // instructor fetched
    const instructorFetched = {}
    const [instructor, setInstructor] = useState(instructorFetched)
    const getInstructorProfile = async (token) => {
        // api call
        const response = await fetch(`${host}/api/auth/instructor/getinstructor`, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem(token)
            }
        })
        const json = await response.json()
        setInstructor(json)
    }

    // getting Videos details
    const videoFetched = []
    const [videos, setVideos] = useState(videoFetched)
    const getVideoDetails = async (token) => {
        const response = await fetch(`${host}/api/video/fetch`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem(token)
            }
        });
        const json = await response.json();
        setVideos(json);
    }

    return (
        <CategoryContext.Provider value={{ category, setCategory, editCategory, getCategory, deleteCategory, getUserProfile, user, videos, getVideoDetails, instructor, getInstructorProfile }}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryState;