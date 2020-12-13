import * as React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "./NewListForm/TextField";

const useStyles = makeStyles({
    root: {
        border: "1px solid black",
        borderRadius: "3px",
        background: "#EFD9CE"
    }
});

export const NewListForm: React.FC = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <h3>Create a new Todo List.</h3>
            <TextField id="Title" required={true} helperText="Name for the new list" variant="outlined" />
            <TextField id="Description" required={false} helperText="Describe the list." variant="outlined" />
        </Container>
    );
};