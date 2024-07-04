import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./Main.jsx";
import Button from "./components/Button.jsx";
import { NavBar } from "./components/NavBar.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Main />
    <Button />
  </React.StrictMode>
);

//modelo figma para o projeto
//https://www.figma.com/design/Rfkv9RcfLKjrSjul1p5kyH/🎨-Personal-Portfolio-Template-(Community)?node-id=216-14&t=HBi4jbBYAIkx5aKo-0