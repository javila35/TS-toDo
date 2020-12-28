import { Button as MuiButton } from "@material-ui/core";
import * as React from "react";
import { List } from "../../Types/types";

interface ButtonProps {
    /** text to display */
    message: string;
};

interface AddButtonProps extends ButtonProps {
    /** Callback from props*/
    handleClick: (e: React.MouseEvent) => void;
}

interface SaveButtonProps extends ButtonProps {
    handleSave: (stateForm: List) => void;
    stateForm: List;
};


export const AddButton: React.FC<AddButtonProps> = ({ handleClick, message }) => {
    return (
        <MuiButton size="small" onClick={handleClick}>{message}</MuiButton>
    );
};

export const SaveButton: React.FC<SaveButtonProps> = ({handleSave, stateForm, message}) => {
    const saveList = (e: React.MouseEvent) => {
        handleSave(stateForm)
    };
    return(
        <MuiButton size="small" onClick={saveList}>{message}</MuiButton>
    )
};