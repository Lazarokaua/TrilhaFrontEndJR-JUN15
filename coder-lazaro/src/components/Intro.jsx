/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../input.css";

import { GitHubIcon, LinkedInIcon, EmailIcon } from "../components/Icones";

export function Intro(props) {
  return (
    <section className="bg-custom-background bg-cover bg-center desktop:flex desktop:flex-row desktop:justify-around desktop:h-screen tablet:flex-col-reverse tablet:items-center tablet:justify-center tablet:text-center mobile:flex mobile:items-center mobile:justify-center mobile:text-center mobile:gap-16">
      <div className="desktop:flex desktop:flex-col desktop:gap-6 desktop:justify-center desktop:items-baseline desktop:p-6 tablet:items-center mobile:w-1/2 mobile:flex mobile:flex-col mobile:items-center mobile:gap-6 mobile:ml-3" >
        <p className="font-raleway font-bold text-secundary-0 desktop:text-3xl laptop:text-sm mobile:text-xs">
          👋 Saudações!
        </p>
        <h1 className="font-raleway font-bold text-detail-0 desktop:text-5xl laptop:text-2xl mobile:text-xs">
          Lázaro Kauã
        </h1>
        <p className="text-detail-0/65 font-raleway font-bold  desktop:text-3xl laptop:text-xl tablet:text-xs mobile:text-balance mobile:text-xs">
          Front-end developer · BI analyst · AI Knowledge
        </p>
        {/* link para baixar curriculo que eu ainda vou fazer */}
        <button className="font-raleway font-medium text-detail-0 desktop:w-40 desktop:h-8 border border-detail-0/35 rounded-full hover:text-red-500 hover:border-secundary-0 transition duration-300 mobile:text-xs mobile:w-20 mobile:h-4 mobile:mb-3 desktop:text-lg">
          <a
            href="https://drive.google.com/file/d/1-6RkKMNUr47rtpCOejkj5DxopCZEwgw0/view?usp=drive_link"
            target="_blank"
          >
            Baixar CV
          </a>
        </button>
      </div>

      <div className="flex flex-col justify-center desktop:p-6 laptop:p-3 desktop:items-center tablet:items-center mobile:gap-2 mobile:p-10 mobile:items-center">
        <img
          src={props.profile}
          alt="Lázaro programador"
          className="tv:w-96 tv:h-96 rounded-full drop-shadow-2xl contrast-100 desktop:h-64 desktop:w-64 laptop:w-32 h-32 tablet:w-28 tablet:h-28 mobile:w-14 mobile:h-14 mobile:items-center mobile:hidden desktop:block laptop:block"
        />
        <div className="desktop:flex desktop:justify-center desktop:gap-8 desktop:mt-4 desktop:mr-2 tablet:flex  tablet:gap-4  mobile:flex mobile:gap-2">
          <a
            href="https://github.com/Lazarokaua"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://github.com/Lazarokaua"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.lazarokaua@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
