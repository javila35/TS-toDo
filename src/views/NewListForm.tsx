import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import { TextField, ToDoInput, Button } from "../components/NewList";
import { List } from "../Types/types";

type State = List;

type FormProps = {
    // callback to take form state, and pass it up.
    saveForm: () => void;
}

export const NewListForm: React.FC<FormProps> = ({ saveForm }) => {
    const initialState: List = { id: "1", title: "", description: "", actionList: [{ id: 0, task: "" }] }
    const [newList, setNewList] = React.useState(initialState);

    const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewList({
            ...newList,
            [e.target.id]: e.target.value
        });
    };

    const handleActionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newActionList = [...newList.actionList];
        newActionList[e.target.id as any].task = e.target.value;
        setNewList({
            ...newList,
            actionList: newActionList
        });
    };

    const renderActionInputs = () => {
        return newList.actionList.map((action, index) => {
            return (
                <>
                    <ToDoInput id={index} action={action.task} handleChange={handleActionChange} />
                    <br />
                </>
            )
        });
    };

    const addNewTask = () => {
        const newAction = { id: newList.actionList.length + 1, task: "" }
        setNewList({
            ...newList,
            actionList: [...newList.actionList, newAction]
        });
    };

    return (
        <Container>
            <Typography variant="h4" color="primary">Create a new Todo List.</Typography>
            <TextField
                id="title"
                required={true}
                value={newList.title}
                helperText="Name for the new list"
                variant="outlined"
                handleChange={handleHeaderChange}
            />
            <TextField
                id="description"
                value={newList.description}
                required={false}
                helperText="Describe the list."
                variant="outlined"
                handleChange={handleHeaderChange}
            />
            <br />
            {renderActionInputs()}
            <br />
            <Button message="Add task" handleClick={addNewTask} />
            <Button message="Save New List" handleClick={saveForm} />
        </Container>
    );
};