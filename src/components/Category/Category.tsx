import React from "react";
import { Todo } from "../App/App";
import { List } from "../List/List";
import Grid from '@mui/material/Grid';

interface Props {
    categories: string[];
    todoList: Todo[];
    addCategory: (category: string) => void;
    removeCategory: (category: string) => void;
    addTask: (title: string, category: string) => void;
    removeTask: (id: string) => void;
    changeTaskStatus: (id: string) => void;
}

export const Category = (props: Props) => {
    return (
        <>
            <Grid container spacing={10}>
                <Grid item xs={12} >
                    <h1>My todo list</h1>
                </Grid>
                {
                    props.categories.map(el =>
                        <List
                            key={el}
                            title={el}
                            todoList={[...props.todoList].filter(item => item.category === el)}
                            addCategory={props.addCategory}
                            removeCategory={props.removeCategory}
                            addTask={props.addTask}
                            removeTask={props.removeTask}
                            changeTaskStatus={props.changeTaskStatus}
                        />
                    )
                }
            </Grid>
        </>
    )
}