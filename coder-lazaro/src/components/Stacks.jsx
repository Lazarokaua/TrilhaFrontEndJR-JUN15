import React from "react";
import html from "../assets/HTML5.svg";
import css from "../assets/css.png";
import js from "../assets/Javascript.png";
import ts from "../assets/TypeScript.png";
import Insomnia from "../assets/Insomnia.png";
import github from "../assets/Github.png";
import tailwindcss from "../assets/TailwindCSS.png";
import react from "../assets/React.png";
import git from "../assets/Shape.png";
import programador from "../assets/programmer.svg";

export function Stacks() {
  return (
    <section className="grid grid-cols-2">
    <div className="flex flex-col items-center justify-center">
          <img
            src={programador}
            alt="Desenvolvedor programando"
            className=" w-2/4"
          />
        </div>
      <div
        className="flex items-center justify-center gap-8 flex-col font-raleway h-screen"
        id="stacks"
      >
        <h4 className="font-raleway font-bold text-back-0 text-5xl">
          Tecnologias e habilidades
        </h4>
        <div className="flex flex-col items-center gap-16">
          <p className="text-back-0/75 font-raleway font-bold text-2xl">
            Techs que uso no dia a dia
          </p>

          <ul>
            <li className="flex gap-6">
              <img src={html} alt="HTML IMG" />
              <img src={css} alt="CSS IMG" />
              <img src={git} alt="GIT IMG" />
              <img src={github} alt="GITHUB IMG" />
              <img src={js} alt="JS IMG" />
              <img src={ts} alt="TS IMG" />
              <img src={tailwindcss} alt="TAILWINDCSS IMG" />
              <img src={Insomnia} alt="INSOMNIA IMG" />
              <img src={react} alt="REACT IMG" />
            </li>
          </ul>
        </div>
        {/* https://storyset.com TODO adicionar imagens que combinem*/}
      </div>
        
    </section>
  );
}
