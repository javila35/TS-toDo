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
};

export const TextField: React.FC<TextFieldProps> = ({ id, required, helperText, variant = "standard" }) => {
    return (
        <FormControl>
            <MuiTextField
                id={id}
                label={id}
                required={required}
                helperText={helperText}
                variant={variant}
            />
        </FormControl>
    )
}