import React from "react";
import { Todo } from "../App/App";
import Grid from '@mui/material/Grid';
import { Buttons } from "../Buttons/Buttons";
import { CategoryButtons } from "../CategoryButtons/CategoryButtons";
import { AddTaskDiv } from "../AddTaskDiv/AddTaskDiv";

interface Props {
    todoList: Todo[];
    title: string;
    addCategory: (category: string) => void;
    removeCategory: (category: string) => void;
    addTask: (title: string, category: string) => void;
    removeTask: (id: string) => void;
    changeTaskStatus: (id: string) => void;
}

export const List = (props: Props) => {

    return (<Grid item xs={4} className="grid-item">
        <h2>{props.title}</h2>
        <ul>
            {props.todoList.map(
                el => <li key={el.id} style={{
                    color: `${el.status === 'done' ? 'rgb(50, 224, 50)' : 'rgb(230, 219, 219)'}`
                }} >{el.title}<Buttons id={el.id} removeTask={props.removeTask} changeTaskStatus={props.changeTaskStatus} /></li>
            )}
        </ul>

        <AddTaskDiv title={props.title} addTask={props.addTask} />
        <CategoryButtons title={props.title} removeCategory={props.removeCategory} />
    </Grid>
    )
}