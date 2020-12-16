import * as React from "react";
import { AppBar as MuiAppBar, Typography } from "@material-ui/core";

export const AppBar = () => {
    return (
        <MuiAppBar color="secondary">
            <Typography variant="h4">Typescript To-Do</Typography>
        </MuiAppBar>
    )
};