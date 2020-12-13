import * as React from 'react';
import { NewListForm } from "./components/NewListForm";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    }
  }
});

function App() {
  return (
    <NewListForm />
  );
};

export default App;
