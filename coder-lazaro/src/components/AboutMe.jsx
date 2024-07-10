import React from "react";

const nome = "Lázaro Kauã Rocha da Silva";

export function AboutMe(props) {
  return (
    <section className="flex justify-around" id="sobre-mim">
      <div>
      {/* imagem profile */}
        <img src={props.profile} alt="imagem do programador lazaro kaua" className="w-96 h-96 rounded-full mt-16 border-2 border-secundary-0 shadow-inner"/>
      </div>
      <div className="flex flex-col gap-4 justify-center mt-16">
        <span className="bg-secundary-0/65 rounded-md font-raleway font-bold w-28">🧐 Sobre mim</span>

        <h2 className="font-raleway font-bold text-5xl">{nome}</h2>

        <p className="text-black/50 font-raleway font-bold text-2xl">
          👋 Me chamo {nome}, mas pode me chamar apenas de Lázaro. Prazer!
        </p>

        <span>
          <p className="text-black/75 font-raleway font-bold">
            👨‍💻 Há mais de 1 ano desenvolvendo e programando interfaces com
            Html, Css, JS e React.
          </p>
          <p className="text-black/75 font-raleway font-bold">
            🎓 Graduando em Análise e Desenvolvimento de Sistemas, pela Unigranrio Afya do
            Rio de Janeiro, Duque de Caxias.
          </p>
          <p className="text-black/75 font-raleway font-bold">💡 Interesses em desenvolvimento Front-end com React.
          </p>
        </span>

        <p className="text-black/50 font-raleway font-bold">
          🚀 Tentando ser melhor - <i> Peter Parker - do Tobey Maguire </i>
        </p>
      </div>
    </section>
  );
}
