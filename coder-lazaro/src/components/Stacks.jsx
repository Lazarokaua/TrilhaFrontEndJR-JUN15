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
    <section className="grid desktop:grid-cols-2 laptop:grid-cols-1 desktop:h-screen desktop:items-center tablet:grid-cols-1 tablet:flex tablet:flex-col-reverse mobile:flex-col-reverse mobile:flex">
      <div className="flex flex-col items-center justify-center">
        <img
          src={programador}
          alt="Desenvolvedor programando"
          className="w-2/4 mobile:hidden"
        />
      </div>
      <div
        className="flex items-center justify-center gap-8 flex-col font-raleway h-screen laptop:gap-2 laptop:h-[50vh] tablet:h-screen"
        id="stacks"
      >
        <h4 className="font-raleway font-bold text-back-0 desktop:text-5xl  laptop:text-2xl mobile:text-xl">
          Tecnologias e habilidades
        </h4>
        <div className="flex flex-col items-center gap-16 desktop:gap-6 ">
          <p className="text-back-0/75 font-raleway font-bold desktop:text-2xl laptop:text-xl mobile:text-md">
            Techs que uso no dia a dia
          </p>

          <ul className="flex flex-wrap justify-center mx-auto gap-2">
            <li>
              <img src={html} alt="HTML IMG"/>
            </li>
            <li>
              <img src={css} alt="CSS IMG" />
            </li>
            <li>
              <img src={git} alt="GIT IMG" />
            </li>
            <li>
              <img src={github} alt="GITHUB IMG" />
            </li>
            <li>
              <img src={js} alt="JS IMG" />
            </li>
            <li>
              <img src={ts} alt="TS IMG" />
            </li>
            <li>
              <img src={tailwindcss} alt="TAILWINDCSS IMG" />
            </li>
            <li>
              <img src={Insomnia} alt="INSOMNIA IMG" />
            </li>
            <li>
              <img src={react} alt="REACT IMG" />
            </li>
          </ul>
        </div>
        {/* https://storyset.com TODO adicionar imagens que combinem*/}
      </div>
    </section>
  );
}
