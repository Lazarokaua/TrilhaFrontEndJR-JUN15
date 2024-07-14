import React from "react";
// TODO colocar a fonte releway [X]
import gitHubProject from "../assets/gitHubProject.png"
import netflix from "../assets/netflix.png"
import nlw from "../assets/nlw.png"
import spotify from "../assets/spotify.png"
import sac from "../assets/sacPbi.png"
import produtosImg from "../assets/produtosPbi.png"
import perfil from "../assets/perfilPbi.png"
import rhImg from "../assets/rhPbi.png"

// adicionar carrossel na versao mobile

//TODO recriar esse conceito usando map para treinar[X]
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
    tags: ["HTML", "CSS", "Figma"],
    imageSrc: spotify, 
    online: true, 
    link: "https://spotify-clone-five-neon.vercel.app", 
  },
  {
    title: "Análise De Produtos",
    description:
      "Projeto Power BI Desenvolvido com dados fictitious para o aprendizado da ferramenta, durante a semana de aprendizado com o Simplifica Treinamentos.",
    tags: ["Power BI", "Excel"],
    imageSrc: produtosImg, 
    online: true, 
    link: "https://app.powerbi.com/view?r=eyJrIjoiMzM5YzkxNTgtNmVhMy00MTBmLWI4MDYtZmQwZDM0NzFjZGE1IiwidCI6IjhlMzM3YWJkLTU1YmYtNGE5NS1iNjc2LTUxYzE5MDYxODdmOSJ9", 
  },
  {
    title: "Análise De Perfil",
    description:
      "Projeto Power BI Desenvolvido com dados fictitious para o aprendizado da ferramenta, durante a semana de aprendizado com o Simplifica Treinamentos.",
    tags: ["Power BI", "Excel"],
    imageSrc: perfil, 
    online: true, 
    link: "https://app.powerbi.com/view?r=eyJrIjoiZDViYzQwMTctMzg0MS00MDZkLTkwYmQtMmY5YWU0NGM3ODZmIiwidCI6IjhlMzM3YWJkLTU1YmYtNGE5NS1iNjc2LTUxYzE5MDYxODdmOSJ9", 
  },
  {
    title: "SAC",
    description:
      "Projeto Power BI Desenvolvido com dados fictitious para o aprendizado da ferramenta, durante a semana de aprendizado com o Simplifica Treinamentos.",
    tags: ["Power BI", "Excel"],
    imageSrc: sac, 
    online: true, 
    link: "https://app.powerbi.com/view?r=eyJrIjoiN2UzZDY4YzgtN2NlZC00YWM0LTg4YTQtZDcwZTM4NzUwZjQ1IiwidCI6IjhlMzM3YWJkLTU1YmYtNGE5NS1iNjc2LTUxYzE5MDYxODdmOSJ9", 
  },
  {
    title: "Acompanhamento RH",
    description:
      "Projeto Power BI Desenvolvido com dados fictitious para o aprendizado da ferramenta, durante o curso com o Danilo Maciel, da Yto Nihon Treinamentos e Consultoria.",
    tags: ["Power BI", "Excel"],
    imageSrc: rhImg, 
    online: true, 
    link: "https://app.powerbi.com/view?r=eyJrIjoiMWNjMWZmOGMtOWYyMC00NWZmLWE3ZDctNGE1ZmMzOTBmYzA1IiwidCI6IjhlMzM3YWJkLTU1YmYtNGE5NS1iNjc2LTUxYzE5MDYxODdmOSJ9", 
  },
  
  

];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#2c2c31] rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 flex flex-col ">
      <img
        className="w-full h-48 object-cover"
        src={project.imageSrc}
        alt={project.title}
      />
      <div className="px-6 py-4 desktop:px-3 desktop:py-2 ">
        <div className="font-bold text-xl mb-2 text-white">{project.title}</div>
        <p className="text-gray-400 text-base">{project.description}</p>
      </div>
      <div className="px-6 py-4 desktop:px-6 desktop:py-4">
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
            className="mx-2 my-2 inline-block border-secundary-0 border hover:bg-secundary-0/80 text-white font-bold py-2 px-4 rounded"
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
    <div className="container mx-auto px-5 py-10 desktop:px-2 desktop:py-5">
      <h2 className="text-3xl font-bold text-back-0 text-center mb-16">
        Meus Projetos
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 laptop:grid-cols-2 desktop:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;