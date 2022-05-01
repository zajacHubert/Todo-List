import React from "react";
import Button from '@mui/material/Button';

interface Props {
    addCategory: (category: string) => void;
    categoryTitleToAdd: string;
}

export const AddCategoryButton = (props: Props) => {
    return (
        <Button
            variant="contained"
            size="large"
            color="success"
            onClick={() => props.addCategory(props.categoryTitleToAdd)}
        >
            Dodaj Kategorię
        </Button >
    )
}