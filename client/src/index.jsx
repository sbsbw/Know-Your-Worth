import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../src/styles/App.css'
import '../src/styles/App1.css'
// import App-job-help from "./AppJobHelp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

