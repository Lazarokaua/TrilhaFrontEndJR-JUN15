import React from "react";
// TODO colocar a fonte releway []
import gitHubProject from "../assets/gitHubProject.png"
import netflix from "../assets/netflix.png"
import nlw from "../assets/nlw.png"
import spotify from "../assets/spotify.png"


//TODO recriar esse conceito usando map para treinar []
const projects = [

  {
    title: "Clone GitHub",
    description:
      "Projeto Desenvolvido com objetivo de aprender o básico de HTML e CSS.",
    tags: ["HTML", "CSS"],
    imageSrc: gitHubProject, 
    online: true, 
    link: "https://clone-github-six.vercel.app", 
  },
  {
    title: "Clone Netflix",
    description:
      "Clone Netflix criado para atender a necessidade acadêmica de praticar o React.",
    tags: ["React JS", "JavaScript"],
    imageSrc: netflix, 
    online: true, 
    link: "https://clone-netflix-2-0.vercel.app", 
  },
  {
    title: "NLW Expert notes",
    description:
      "Essa aplicação foi desenvolvida durante o NLW Experts da Rocketseat utilizando React, TypeScript, Tailwind e a SpeechRecognition API.",
    tags: ["React JS", "Typescript"],
    imageSrc: nlw, 
    online: true, 
    link: "https://nlw-expert-react-6mblnxt4w-lazarokauas-projects.vercel.app", 
  },
  {
    title: "Clone-Spotify",
    description:
      "Projeto em Front-end da imersão front-end da alura #ImersãoFrontEnd #Alura",
    tags: ["HTML", "CSS"],
    imageSrc: spotify, 
    online: true, 
    link: "https://spotify-clone-five-neon.vercel.app", 
  },
  
  

];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#202024] rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={project.imageSrc}
        alt={project.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{project.title}</div>
        <p className="text-gray-400 text-base">{project.description}</p>
      </div>
      <div className="px-6 py-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm text-gray-300 mr-2"
          >
            {tag}
          </span>
        ))}
        {project.online && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-secundary-0 border hover:bg-secundary-0/80 text-white font-bold py-2 px-4 rounded"
          >
            Ver online
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold text-white text-center mb-16">
        Meus Projetos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    // TODO ADICIONAR PROJETOS POWER BI []
  );
};

export default ProjectsGrid;