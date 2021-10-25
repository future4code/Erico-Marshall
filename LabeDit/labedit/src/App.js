import theme from "./Constants/theme";
import React from "react";
import Router from "./Router/Routers";
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;