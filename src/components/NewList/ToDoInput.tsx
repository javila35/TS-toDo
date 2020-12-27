import * as React from "react";
import { FormControl, TextField as MuiTextField } from "@material-ui/core";

type ToDoProps = {
    /** Identifier */
    id: number;
    /** The task of the the to do */
    action: string;
    /** Callback to update parent state */
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ToDoInput: React.FC<ToDoProps> = ({ action, handleChange, id }) => {
    return (
        <FormControl>
            <MuiTextField
                label={`To Do #${id + 1}`}
                helperText="What's your task?"
                id={`${id}`}
                value={action}
                onChange={handleChange}
            />
        </FormControl>
    );
};