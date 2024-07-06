import React from "react";
import "../input.css";
import profile from "../assets/profile.jpg";

import {GitHubIcon, LinkedInIcon, EmailIcon} from "../components/Icones"


export function Intro() {
  return (
    <section className="flex justify-around">
      <div>
        <p>👋 Saudações!</p>
        <h1>Lázaro Kauã</h1>
        <p>Front-end developer · BI analyst</p>
      </div>

      <div className="flex flex-col">
        <img src={profile} alt="Lázaro programador" className="w-96 h-96 rounded-full mt-16 border-2 border-secundary-0 shadow-inner" />
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
