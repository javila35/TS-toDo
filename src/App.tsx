import * as React from 'react';
import { NewListForm, ListCard } from "./views";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper, CssBaseline } from "@material-ui/core";
import { AppBar } from './components/AppBar';
import { createCustomTheme } from "./theme";
import { List } from "./Types/types";

type State = {
  /** Array of all to do lists */
  all: List[];
};

function App() {
  const initialState: State = { all: [] };
  const [state, setState] = React.useState(initialState)

  const renderCards = () => {
    return state.all.map((list, index) => <ListCard key={index} list={list} />);
  };

  const saveForm = (stateForm: List) => {
    setState({ ...state, all: [...state.all, stateForm] });
  };

  return (
    <ThemeProvider theme={createCustomTheme()}>
      <AppBar />
      {renderCards()}
      <Paper>

        <NewListForm saveForm={saveForm} listNumber={state.all.length} />
      </Paper>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
