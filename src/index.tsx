import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";

import App from "./components/core/App";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

