import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async"; 
import App from "./App";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
