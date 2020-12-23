import * as React from "react";
import { OutlinedInput as Input } from "@material-ui/core";

type ToDoProps = {
    /** Identifier */
    id: number;
    /** The task of the the to do */
    action: string;
    /** Callback to update parent state */
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ToDoInput: React.FC<ToDoProps> = ({ action, handleChange, id }) => {
    return (<Input defaultValue={action} label={`Action ${id}`} onChange={handleChange} />);
};