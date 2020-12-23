import { createMuiTheme } from "@material-ui/core/styles";

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
    }
}

export const createCustomTheme = () => createMuiTheme({ ...customTheme });