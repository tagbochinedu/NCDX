import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#72E128", // Change primary color to red
    },
    secondary: {
      main: "#00FF00", // Change secondary color to green
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {" "}
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
