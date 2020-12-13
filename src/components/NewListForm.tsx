import * as React from "react";
import { FormControl, InputLabel, Input, Container } from "@material-ui/core";

export const NewListForm: React.FC = () => {
    return (
        <Container>
            <h3>Create a new Todo List.</h3>
            <FormControl>
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input id="title" />
            </FormControl>
            <br />
            <FormControl>
                <InputLabel htmlFor="symbol">Symbol</InputLabel>
                <Input id="symbol" />
            </FormControl>
            <br />
            <FormControl>
                <InputLabel htmlFor="description">Description</InputLabel>
                <Input id="description" />
            </FormControl>
            <br />
        </Container>
    );
};