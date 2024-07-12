import React from "react";
import logo from "../assets/logo_coder-white.webp";

//TODO linkar todas as sessoes []
export function NavBar() {
  return (
    <header className="bg-black flex justify-between">
      <a href="/">
        <img src={logo} alt="logo do codigo certo" className="ml-6 mt-2" />
      </a>
      <ul className="flex mt-12 gap-12 mr-12">
        <a href="/">
          <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0">
            inicial
          </li>
        </a>
        <a href="#sobre-mim">
          <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0">
            Sobre mim
          </li>
        </a>
        <a href="#projetos">
          <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0">
            Projetos
           
          </li>
        </a>
        <a href="/">
          <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0">
          Carreira
           {/*TODO sessao: Minha trajetoria ate aqui []*/}
          </li>
        </a>
        <a href="/">
          <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0">
            Tecnologias
          </li>
        </a>
      </ul>
    </header>
  );
}
