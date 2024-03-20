import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App-job-help from "./AppJobHelp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
ReactDOM.createRoot(document.getElementById("jobHelp")).render(
  <React.StrictMode>
    <App-job-help />
  </React.StrictMode>,
);
