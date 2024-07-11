import React from "react";
import { ProjetoCard } from "./ProjetoCard";

import gitHubProject from "../assets/gitHubProject.png";

export function Projetos() {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <span>
          <p className="bg-detail-0 rounded-md font-raleway font-bold w-28 ml-6 mt-20">
            🔗 Portfólio
          </p>
        </span>
        <h2 className="text-detail-0 font-raleway font-bold w-28 ml-6">
          Projetos
        </h2>
      </div>

      <div className="flex justify-around ">
        <ProjetoCard
          tituloDoProjeto="Clone GitHub"
          description="Primeiro Projeto, aqui o objetivo era colocar em pratica tags simples em html, estilos com css."
          tagOne="HTML"
          tagTwo="CSS"
          alt="projeto clone gitHub imagem"
          image={gitHubProject}
          link="https://github.com/Lazarokaua/Clone-Github"
        />
        <ProjetoCard
          tituloDoProjeto="Clone GitHub"
          description="Primeiro Projeto, aqui o objetivo era colocar em pratica tags simples em html, estilos com css."
          tagOne="HTML"
          tagTwo="CSS"
          alt="projeto clone gitHub imagem"
          image={gitHubProject}
          link="https://github.com/Lazarokaua/Clone-Github"
        />
        <ProjetoCard
          tituloDoProjeto="Clone GitHub"
          description="Primeiro Projeto, aqui o objetivo era colocar em pratica tags simples em html, estilos com css."
          tagOne="HTML"
          tagTwo="CSS"
          alt="projeto clone gitHub imagem"
          image={gitHubProject}
          link="https://github.com/Lazarokaua/Clone-Github"
        />
        
      </div>
      <div className="flex justify-around h-screen">
        <ProjetoCard
          tituloDoProjeto="Clone GitHub"
          description="Primeiro Projeto, aqui o objetivo era colocar em pratica tags simples em html, estilos com css."
          tagOne="HTML"
          tagTwo="CSS"
          alt="projeto clone gitHub imagem"
          image={gitHubProject}
          link="https://github.com/Lazarokaua/Clone-Github"
        />
        <ProjetoCard
          tituloDoProjeto="Clone GitHub"
          description="Primeiro Projeto, aqui o objetivo era colocar em pratica tags simples em html, estilos com css."
          tagOne="HTML"
          tagTwo="CSS"
          alt="projeto clone gitHub imagem"
          image={gitHubProject}
          link="https://github.com/Lazarokaua/Clone-Github"
        />
        <ProjetoCard
          tituloDoProjeto="Clone GitHub"
          description="Primeiro Projeto, aqui o objetivo era colocar em pratica tags simples em html, estilos com css."
          tagOne="HTML"
          tagTwo="CSS"
          alt="projeto clone gitHub imagem"
          image={gitHubProject}
          link="https://github.com/Lazarokaua/Clone-Github"
        />
        
      </div>
    </section>
  );
}
