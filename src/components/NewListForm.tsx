import * as React from "react";
import { Container } from "@material-ui/core";
import { TextField } from "./NewListForm/TextField";
import { Checkbox } from "./Test/Checkbox";

export const NewListForm: React.FC = () => {
    return (
        <Container>
            <h3>Create a new Todo List.</h3>
            <TextField id="Title" required={true} helperText="Name for the new list" variant="outlined" />
            <TextField id="Description" required={false} helperText="Describe the list." variant="outlined" />
            <br />
            <Checkbox color="primary" label="Primary" labelColor="white" />
            <Checkbox color="secondary" label="Secondary" />
        </Container>
    );
};