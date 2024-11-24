import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/styles/theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/movies-browser">
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
