import React from "react";
import ProjectsGrid from "../components/ProjetoCard"

const ano = new Date().getFullYear();

export function Projetos() {
  return (
    <section id="projetos" className="flex flex-col gap-6 bg-detail-0 h-screen">
      <ProjectsGrid />

      <section id="footer" className="flex flex-col justify-center items-center bg-black">
        <h2 className="font-raleway text-2xl text-detail-0">
          Criado com ❤️ por Lázaro Kauã em <span className="text-secundary-0/50">{ano}</span>
        </h2>
      </section>
    
  
  
    </section>
  );
}
