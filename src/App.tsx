import * as React from 'react';
import { NewListCard } from "./views/NewListCard";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper, CssBaseline } from "@material-ui/core";
import { AppBar } from './components/AppBar';
import { createCustomTheme } from "./theme";
import { List } from "./Types/types";

const theme = createCustomTheme();

type State = {
  /** Array of all to do lists */
  all: List[];
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Paper>
        <NewListCard />
      </Paper>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
