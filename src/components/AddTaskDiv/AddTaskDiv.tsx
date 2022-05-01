import React, { useState } from "react";
import Button from '@mui/material/Button';
import './AddTaskDiv.css';

interface Props {
    addTask: (title: string, category: string) => void;
    title: string;
}

export const AddTaskDiv = (props: Props) => {

    const [taskTitle, setTaskTitle] = useState<string>('');

    const handleAddTask = (title: string, category: string) => {
        props.addTask(taskTitle, category);
        setTaskTitle('');
    }

    return (
        <div className="add-task-div">
            <input
                type="text"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}
            />

            <Button
                className="add-task-button"
                variant="text"
                onClick={() => handleAddTask(taskTitle, props.title)}
            >
                {taskTitle && 'Add task'}
            </Button>
        </div>
    )
}

