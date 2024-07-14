import React from "react";
import { Intro } from "./Intro.jsx";
import { NavBar } from "./NavBar.jsx";
import { AboutMe } from "./AboutMe.jsx";
import profile from "../assets/profile.jpg";
import profile2 from "../assets/profile2.jpg";
import { Projetos } from "./Projetos.jsx";
import { Stacks } from "./Stacks.jsx";


export function App() {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <Intro profile={profile} />
      <Stacks />
      <AboutMe profile={profile2} />
      <Projetos />
    </div>
  );
}
