import React from "react";
import ProjectsGrid from "../components/ProjetoCard"


export function Projetos() {
  return (
    <section id="projetos" className="flex flex-col gap-6 bg-black h-screen">
      <ProjectsGrid />
    </section>
  );
}
