import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import { TextField } from "../components/NewList";
import { List } from "../Types/types";

type State = List;

export const NewListCard: React.FC = () => {
    const initialState = { id: 1, title: "", description: "", list: [] }
    const [list, setList] = React.useState(initialState);

    const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setList({
            ...list,
            [e.target.id]: e.target.value
        })
    };

    return (
        <Container>
            <Typography variant="h4" color="primary">Create a new Todo List.</Typography>
            <TextField
                id="title"
                required={true}
                value={list.title}
                helperText="Name for the new list"
                variant="outlined"
                handleChange={handleHeaderChange}
            />
            <TextField
                id="description"
                value={list.description}
                required={false}
                helperText="Describe the list."
                variant="outlined"
                handleChange={handleHeaderChange}
            />


        </Container>
    );
};