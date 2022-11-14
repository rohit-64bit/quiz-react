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
            body: JSON.stringify({ title, description})
        });
        const json = await response.json();

        let newCategory = JSON.parse(JSON.stringify(category))
        // Logic to edit in client
        for (let index = 0; index < newCategory.length; index++) {
            const element = newcategory[index];
            if (element._id === id) {
                newCategory[index].title = title;
                newCategory[index].description = description;
                break;
            }
        }
        setCategory(newCategory);
    }


    return (
        <CategoryContext.Provider value={{ category, setCategory, editCategory , getCategory, deleteCategory }}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryState;