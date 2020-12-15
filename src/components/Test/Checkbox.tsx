import * as React from "react";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        color: "blue",
        "&$checked": {
            color: "white",

        }
    },
    checked: {}
});

export const Checkbox = () => {
    const { root, checked } = useStyles();

    return (
        // <FormControlLabel
        //     className={root}
        //     label="Hi King"
        //     control={
        <MuiCheckbox
            classes={{ root: root, checked: checked }}
        />
        // }
        // />
    )
}