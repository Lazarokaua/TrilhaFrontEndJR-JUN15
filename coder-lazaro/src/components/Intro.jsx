/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../input.css";

import {GitHubIcon, LinkedInIcon, EmailIcon} from "../components/Icones"


export function Intro(props) {
  return (
    <section className="bg-custom-background bg-cover bg-center flex justify-around h-screen">
      <div className="flex flex-col gap-6 justify-center desktop:p-6">
        <p className="font-raleway font-bold text-secundary-0 desktop:text-3xl laptop:text-sm">👋 Saudações!</p>
        <h1 className="font-raleway font-bold text-detail-0 desktop:text-5xl laptop:text-2xl">Lázaro Kauã</h1>
        <p className="text-detail-0/65 font-raleway font-bold desktop:text-3xl laptop:text-xl">Front-end developer · BI analyst · AI Knowledge</p>
                                              {/* link para baixar curriculo que eu ainda vou fazer */}
        <button className="font-raleway font-medium text-detail-0 w-40 h-8 border border-detail-0/35 rounded-full hover:text-red-500 hover:border-secundary-0 transition duration-300"><a href="https://drive.usercontent.google.com/u/0/uc?id=1-6RkKMNUr47rtpCOejkj5DxopCZEwgw0&export=download" target="_blank">Baixar CV</a></button>
      </div>

      <div className="flex flex-col justify-center mb-16 desktop:p-6 laptop:p-3 items-center">
        <img src={props.profile} alt="Lázaro programador" className="tv:w-96 tv:h-96 rounded-full drop-shadow-2xl contrast-100 desktop:h-64 desktop:w-64 laptop:w-32 h-32" />
        <div className="flex justify-center gap-8 mt-4 mr-2 ">
          <a href="https://github.com/Lazarokaua" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://github.com/Lazarokaua" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.lazarokaua@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
