import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Layout from "./Features/Layout";
import HeroComponent from "./Features/HeroComponent";
import CardComponent from "./Features/Card";
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
      <Layout>
        <HomePage />
      </Layout>
    </MuiThemeProvider>
  );
}

export default App;
