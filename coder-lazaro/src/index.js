import React from "react";
import ReactDOM from "react-dom/client";
import { Intro } from "./components/Intro.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { AboutMe } from "./components/AboutMe.jsx";
import profile from "../src/assets/profile.jpg"
import profile2 from "../src/assets/profile2.jpg"
import { Projetos } from "./components/Projetos.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Intro  profile={profile}/>
    <AboutMe profile={profile2}/>
    <Projetos />
   
  </React.StrictMode>
);

//modelo figma para o projeto
//https://www.figma.com/design/Rfkv9RcfLKjrSjul1p5kyH/🎨-Personal-Portfolio-Template-(Community)?node-id=216-14&t=HBi4jbBYAIkx5aKo-0