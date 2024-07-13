import React from "react";
import ProjectsGrid from "../components/ProjetoCard"


export function Projetos() {
  return (
    <section id="projetos" className="flex flex-col gap-6 bg-detail-0 h-screen">
      <ProjectsGrid />
    </section>
  );
}
