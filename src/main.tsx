import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.js";
import App from "./core/App.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
