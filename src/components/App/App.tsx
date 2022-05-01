import React, { useState } from "react";
import { Category } from "../Category/Category";
import Grid from '@mui/material/Grid';
import './App.css';
import { v4 as uuid } from 'uuid';
import { AddCategoryButton } from "../AddCategoryButton/AddCategoryButton";


export interface Todo {
    id: string;
    title: string;
    status: string;
    category: string;
}

export const App = () => {

    const [todoList, setTodoList] = useState<Todo[] | []>([]);
    const [categories, setCategories] = useState<string[] | []>([]);
    const [categoryTitleToAdd, setCategoryTitleToAdd] = useState<string>('');

    const addCategory = (category: string) => {
        setCategories(prev => [...prev, category]);
        setCategoryTitleToAdd('')
    }

    const removeCategory = (category: string) => {
        setCategories(prev => (prev.filter(el => el !== category)))
    }

    const addTask = (title: string, category: string) => {
        setTodoList(prev => [...prev, {
            title,
            category,
            id: uuid(),
            status: 'todo',
        }])
    }

    const removeTask = (id: string) => {
        setTodoList(prev => prev.filter(el => el.id !== id));
    }

    const changeTaskStatus = (id: string) => {
        setTodoList(
            todoList.map(el =>
                el.id === id
                    ? {
                        ...el,
                        status: 'done',
                    }
                    : el
            )
        )
    }

    return (
        <>
            <Grid container spacing={2} className="main-container">
                {
                    <Category
                        addCategory={addCategory}
                        categories={categories}
                        todoList={todoList}
                        removeCategory={removeCategory}
                        addTask={addTask}
                        removeTask={removeTask}
                        changeTaskStatus={changeTaskStatus}
                    />
                }
            </Grid>

            <Grid
                className="add-category-div"
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <div>
                    <input
                        className="add-category-input"
                        value={categoryTitleToAdd}
                        onChange={e => setCategoryTitleToAdd(e.target.value)}
                    />
                    <AddCategoryButton
                        categoryTitleToAdd={categoryTitleToAdd}
                        addCategory={addCategory}
                    />
                </div>
            </Grid>
        </>
    );
}

