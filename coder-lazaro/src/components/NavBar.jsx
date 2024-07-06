import React from "react";
import logo from "../assets/logo_coder-white.webp";

export function NavBar() {
  return (
    <header className="bg-back-0 flex justify-between">
      <a href="/">
        <img src={logo} alt="logo do codigo certo" className="ml-6 mt-2" />
      </a>
      <ul className="flex mt-12 gap-12 mr-12">
        <a href="/">
          <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0">
            inicial
          </li>
        </a>
        <a href="/">
          <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0">
            Sobre mim
          </li>
        </a>
        <a href="/">
          <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0">
            Carreira
            {/* sessao: Minha trajetoria ate aqui */}
          </li>
        </a>
        <a href="/">
          <li className="font-raleway font-bold text-xl text-detail-0 hover:text-secundary-0">
            Projetos
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
