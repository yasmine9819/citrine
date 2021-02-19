import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import HomePage from "./Pages/Home";

let THEME = createMuiTheme({
  typography: {
    button: {
      fontWeight: "bold",
    },
  },
});
THEME = responsiveFontSizes(THEME);

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <HomePage />
    </MuiThemeProvider>
  );
}

export default App;
