import React from "react";
import "../input.css";

import {GitHubIcon, LinkedInIcon, EmailIcon} from "../components/Icones"


export function Intro(props) {
  return (
    <section className="bg-custom-background bg-cover bg-center flex justify-around h-screen">
      <div className="flex flex-col gap-6 justify-center">
        <p className="font-raleway font-bold text-secundary-0 text-3xl">👋 Saudações!</p>
        <h1 className="font-raleway font-bold text-detail-0 text-5xl">Lázaro Kauã</h1>
        <p className="text-detail-0/65 font-raleway font-bold text-3xl">Front-end developer · BI analyst · AI Knowledge</p>
                                              {/* link para baixar curriculo que eu ainda vou fazer */}
        <button className="font-raleway font-medium text-detail-0 w-40 h-8 border border-detail-0/35 rounded-full hover:text-red-500 hover:border-secundary-0 transition duration-300"><a href="/">Baixar CV</a></button>
      </div>

      <div className="flex flex-col justify-center mb-16">
        <img src={props.profile} alt="Lázaro programador" className="w-96 h-96 rounded-full drop-shadow-2xl contrast-100" />
        <div className="flex justify-center gap-8 mt-4 mr-2">
          <a href="/">
            <GitHubIcon />
          </a>
          <a href="/">
            <LinkedInIcon />
          </a>
          <a href="/">
            <EmailIcon />
          </a>
        </div>
        {/* mudar os icones para a cor preta */}
      </div>
    </section>
  );
}
