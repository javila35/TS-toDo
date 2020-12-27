import * as React from 'react';
import { NewListForm, ListCard } from "./views";
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

  const renderCards = () => {
    // take state.all and render a card for each list.
  };

  const saveForm = () => {
    // this is the callback to be passed to NewListForm
    // Will take form state and save it into state.all
  }
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Paper>
        {renderCards()}
        <NewListForm saveForm={saveForm} />
      </Paper>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
