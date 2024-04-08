import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layout";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
