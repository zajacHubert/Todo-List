import React from "react";
import Button from '@mui/material/Button';
import './Buttons.css';


interface Props {
    removeTask: (id: string) => void;
    changeTaskStatus: (id: string) => void;
    id: string;
}

export const Buttons = (props: Props) => {

    return (
        <>
            <Button
                variant="contained"
                size="small" color="success"
                className="btn-mui"
                onClick={() => props.changeTaskStatus(props.id)}
            >
                Done
            </Button>
            <Button
                variant="contained"
                size="small"
                color="error"
                className="btn-mui"
                onClick={() => props.removeTask(props.id)}
            >
                Remove
            </Button>
        </>
    )
}