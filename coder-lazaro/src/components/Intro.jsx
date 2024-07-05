import React from "react";
import "../input.css"
import profile from "../assets/profile.jpg"
import gitHub from "../assets/github.svg"
import linkedIn from "../assets/linkedin.svg"
import email from "../assets/email.svg"

export function Intro() {
  return (
    <section className="">
    <div>
      <p>👋 Saudações!</p>
      <h1>Lázaro Kauã</h1>
      <p>Front-end developer · BI analyst</p>
    </div>

    <div>
      <img src={profile} alt="Lázaro programador" className="w-96 h-96"/>
      <img src={gitHub} alt="icone github"/>
      <img src={linkedIn} alt="icone linkedIn"/> 
      <img src={email} alt="icone email"/>
      {/* mudar os icones para a cor preta */}
    </div>
    </section>
  );
}
