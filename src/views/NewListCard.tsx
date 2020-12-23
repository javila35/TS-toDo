import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import { TextField, ToDoInput } from "../components/NewList";
import { List, Action } from "../Types/types";

type State = List;

export const NewListCard: React.FC = () => {
    const initialState = { id: 1, title: "", description: "", actionList: [] }
    const [newList, setNewList] = React.useState(initialState);

    const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewList({
            ...newList,
            [e.target.id]: e.target.value
        });
    };

    const handleActionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newActionArray: Array<Action> = [...newList.actionList]
        setNewList({
            ...newList,
            newList.actionList = newActionArray
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

            <Container maxWidth="sm">
                <ToDoInput id={1} action={""} handleChange={handleActionChange} />
            </Container>
        </Container>
    );
};