import * as React from 'react';
import { NewListForm } from "./components/NewListForm";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors"
import { Paper } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#362C28"
    },
    secondary: lightBlue,
    background: {
      default: "#7C9082",
      paper: "#7C9082"
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ width: "100vw", height: "100vh" }}>
        <NewListForm />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
