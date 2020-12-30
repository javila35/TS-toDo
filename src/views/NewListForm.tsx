import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import { TextField, ToDoInput, AddButton, SaveButton } from "../components/NewList";
import { List } from "../Types/types";

type State = List;

type FormProps = {
    /** callback to take form state, and pass it up. */
    saveForm: (stateForm: List) => void;
    /** length of all array for new list id */
    listNumber: number;
};

export const NewListForm: React.FC<FormProps> = ({ saveForm, listNumber }) => {
    const initialState: List = { id: listNumber, title: "", description: "", actionList: [{ id: listNumber, task: "" }] }
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
                <React.Fragment key={index}>
                    <ToDoInput id={index} action={action.task} handleChange={handleActionChange} />
                    <br />
                </React.Fragment>
            )
        });
    };

    const addNewTask = () => {
        const newAction = { id: newList.actionList.length, task: "" }
        setNewList({
            ...newList,
            actionList: [...newList.actionList, newAction]
        });
    };

    const clearForm = () => {
        // Inputs are not clearing on state update
        setNewList(initialState);
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
            <AddButton message="Add task" handleClick={addNewTask} />
            <SaveButton message="Save New List" handleSave={saveForm} stateForm={newList} clearForm={clearForm} />
        </Container>
    );
};