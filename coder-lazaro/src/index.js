import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { DynamicFavicon } from "./components/Favicon.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <DynamicFavicon />
  </React.StrictMode>
);
