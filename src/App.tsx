import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Layout from "./Features/Layout";

const THEME = createMuiTheme({
  typography: {
    button: {
      fontWeight: "bold",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <Layout>
        <Container maxWidth="lg">
          <div></div>
        </Container>
      </Layout>
    </MuiThemeProvider>
  );
}

export default App;
