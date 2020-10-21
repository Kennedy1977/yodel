import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./services/context/GlobalState";
import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
