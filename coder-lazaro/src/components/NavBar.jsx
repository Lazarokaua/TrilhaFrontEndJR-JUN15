import React, { useState } from "react";
import logo from "../assets/logo_coder-white.webp";


export function NavBar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)



  return (
    <header className="bg-black flex justify-between w-full">
      <a href="/">
        <img src={logo} alt="logo do codigo certo" className="tv:ml-6 mt-2 laptop:ml-1 laptop:mt-1" />
      </a>
      <ul className="flex mt-12 gap-12 mr-12 ">
        <a href="/">
          <li className="font-raleway font-bold desktop:text-xl laptop:text-base text-detail-0 hover:text-secundary-0">
            inicial
          </li>
        </a>
        <a href="#stacks">
          <li className="font-raleway font-bold desktop:text-xl laptop:text-base text-detail-0 hover:text-secundary-0">
            Tecnologias
          </li>
        </a>
        <a href="#sobre-mim">
          <li className="font-raleway font-bold desktop:text-xl laptop:text-base text-detail-0 hover:text-secundary-0">
            Sobre mim
          </li>
        </a>
        <a href="#projetos">
          <li className="font-raleway font-bold desktop:text-xl laptop:text-base text-detail-0 hover:text-secundary-0">
            Projetos
          </li>
        </a>
      </ul>


      <button 
      className="md:hidden text-white" 
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? ( 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
      {/* Menu Mobile (aparece ao clicar no botão) */}
      {isMobileMenuOpen && (
        <ul className="absolute top-0 right-0 bg-black w-full md:hidden py-4"> 
          <a href="/" onClick={() => setIsMobileMenuOpen(false)}> {/* Fecha ao clicar */}
            <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0 text-center py-2">
              Inicial
            </li>
          </a>
          <a href="/" onClick={() => setIsMobileMenuOpen(false)}> {/* Fecha ao clicar */}
            <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0 text-center py-2">
            Tecnologias
            </li>
          </a>
          <a href="/" onClick={() => setIsMobileMenuOpen(false)}> {/* Fecha ao clicar */}
            <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0 text-center py-2">
            Sobre mim
            </li>
          </a>
          <a href="/" onClick={() => setIsMobileMenuOpen(false)}> {/* Fecha ao clicar */}
            <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0 text-center py-2">
            Projetos
            </li>
          </a>
        </ul>
      )}
    </header>
  );
}
