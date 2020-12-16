import * as React from "react";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@material-ui/core";

type CheckboxProps = {
    label?: string;
    color?: "primary" | "secondary";
    labelColor?: string;
}
export const Checkbox = (props: CheckboxProps) => {
    const { color, label, labelColor } = props;

    return (
        <FormControlLabel
            label={label}
            style={{ color: labelColor }}
            control={
                <MuiCheckbox
                    disableTouchRipple
                    color={color}
                />
            }
        />
    )
};