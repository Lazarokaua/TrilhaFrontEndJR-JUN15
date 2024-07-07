import React from "react";
import ReactDOM from "react-dom/client";
import { Intro } from "./components/Intro.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { AboutMe } from "./components/AboutMe.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Intro />
    <AboutMe />
   
  </React.StrictMode>
);

//modelo figma para o projeto
//https://www.figma.com/design/Rfkv9RcfLKjrSjul1p5kyH/🎨-Personal-Portfolio-Template-(Community)?node-id=216-14&t=HBi4jbBYAIkx5aKo-0