import React from "react";
import Button from '@mui/material/Button';
import './CategoryButton.css';

interface Props {
    title: string;
    removeCategory: (category: string) => void;
}

export const CategoryButtons = (props: Props) => {
    return (
        <Button
            variant="contained"
            size="medium"
            color="error"
            className="btn-mui-remove-category"
            onClick={() => props.removeCategory(props.title)}
        >Remove category
        </Button>
    )
}

