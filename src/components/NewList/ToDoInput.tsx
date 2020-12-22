import * as React from "react";
import { Input } from "@material-ui/core";

type ToDoProps = {
    /** Identifier */
    id: number;
    /** The task of the the to do */
    action: string;
    /** Callback to update parent state */
    handleChange: () => void;
}

export const ToDoInput: React.FC<ToDoProps> = ({ action, handleChange }) => {
    return (<Input value={action} onChange={handleChange} />);
};