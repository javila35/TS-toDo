import * as React from "react";
import { FormControl, TextField as MuiTextField } from "@material-ui/core";

type TextFieldProps = {
    /** String for ID and Label */
    id: string;
    /** Is this value required? */
    required: boolean;
    /** Description to display below input */
    helperText?: string;
    /** Type of textfield */
    variant?: "outlined" | "filled" | "standard";
    /** Controlled state passed down from parent */
    value: string;
    /** Callback to update state in parent */
    handleChange: (React.ChangeEventHandler<HTMLInputElement>);
};

export const TextField: React.FC<TextFieldProps> = ({ id, required, helperText, variant = "standard", handleChange }) => {
    return (
        <FormControl>
            <MuiTextField
                id={id}
                label={id}
                required={required}
                helperText={helperText}
                onChange={handleChange}
                variant={variant}
            />
        </FormControl>
    )
}