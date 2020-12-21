import * as React from 'react';
import { NewListForm } from "./components/NewListForm";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Shadows } from "@material-ui/core/styles/shadows";
import { Paper, CssBaseline } from "@material-ui/core";
import { AppBar } from './components/AppBar';
import { List } from "./Types/types";

const theme = createMuiTheme({
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
  shadows: Array(25).fill("none") as Shadows
});

type State = {
  /** Array of all to do lists */
  all: List[];
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Paper>
        <NewListForm />
      </Paper>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
