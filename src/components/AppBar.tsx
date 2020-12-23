import * as React from "react";
import { AppBar as MuiAppBar, Typography } from "@material-ui/core";

export const AppBar = () => {
    return (
        <MuiAppBar color="transparent" position="sticky" elevation={0}>
            <Typography variant="h2" color="secondary">Typescript To-Do</Typography>
        </MuiAppBar>
    )
};