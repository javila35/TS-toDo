import * as React from 'react';
import { NewListForm } from "./components/NewListForm";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { lightBlue, pink } from "@material-ui/core/colors"
import { Paper, CssBaseline } from "@material-ui/core";
import { AppBar } from './components/AppBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#362C28"
    },
    secondary: {
      main: lightBlue[400],
    },
    background: {
      default: pink[300],
      paper: "#7C9082"
    },
    action: {
      hoverOpacity: 0
    }
  }
});


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
