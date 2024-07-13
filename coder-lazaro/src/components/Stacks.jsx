import React from "react";
import html from "../assets/HTML5.svg";
import css from "../assets/css.png";
import js from "../assets/Javascript.png";
import ts from "../assets/TypeScript.png";
import Insomnia from "../assets/Insomnia.png";
import github from "../assets/Github.png";
import tailwindcss from "../assets/TailwindCSS.png";
import react from "../assets/React.png";



export function Stacks() {
  return <section className="flex items-center justify-center gap-8 flex-col font-raleway h-screen" id="stacks">
    <h4 className="font-raleway font-bold text-back-0 text-5xl">Tecnologias e habilidades</h4>
    <div className="flex flex-col items-center gap-16">
      <p className="text-back-0/75 font-raleway font-bold text-2xl">Techs que uso no dia a dia</p>

      <ul>
        <li className="flex gap-6">
            <img src={html} alt="HTML IMG"/>
            <img src={css} alt="HTML IMG"/>
            <img src={js} alt="HTML IMG"/>
            <img src={ts} alt="HTML IMG"/>
            <img src={Insomnia} alt="HTML IMG"/>
            <img src={github} alt="HTML IMG"/>
            <img src={html} alt="HTML IMG"/>
            <img src={tailwindcss} alt="HTML IMG"/>

        </li>
      </ul>
    </div> 
    {/* https://storyset.com TODO adicionar imagens que combinem*/} 
  </section>;
}
