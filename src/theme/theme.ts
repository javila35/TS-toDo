import { createMuiTheme } from "@material-ui/core/styles";
import { MuiInputLabel, MuiContainer } from "./overrides";

const customTheme = {
    palette: {
        primary: {
            main: "#2A2F33"
        },
        secondary: {
            main: "#8c8c9c",
        },
        background: {
            default: "#BBB6A5",
            paper: "#8C9491"
        },
        action: {
            hoverOpacity: 0
        }
    },
    overrides: {
        MuiInputLabel,
        MuiContainer,
    },
};

export const createCustomTheme = () => createMuiTheme({ ...customTheme });