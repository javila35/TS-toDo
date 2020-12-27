import { Button as MuiButton } from "@material-ui/core";
import * as React from "react";

type ButtonProps = {
    message: string;
    handleClick: (e: React.MouseEvent) => void;
};


export const Button: React.FC<ButtonProps> = ({ handleClick, message }) => {
    return (
        <MuiButton size="small" onClick={handleClick}>{message}</MuiButton>
    );
};