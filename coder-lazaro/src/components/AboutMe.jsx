import React from "react";

const nome = "Lázaro Kauã";

export function AboutMe(props) {
  return (
    <section className="flex justify-around h-screen bg-back-0 desktop:flex-col items-center laptop:flex-col laptop:items-center tablet:flex-col mobile:flex-col" id="sobre-mim">
      <div className="flex flex-col justify-center desktop:items-center laptop:items-center">
      {/* imagem profile */}
        <img src={props.profile} alt="imagem do programador lazaro kaua" className="w-96 h-96 rounded-full border-2 shadow-2xl  desktop:w-56 desktop:h-56 laptop:w-40 laptop:h-40 mobile:w-28 mobile:h-28"/>
        <h2 className=" font-raleway font-bold text-detail-0 desktop:text-2xl mt-6 tablet:hidden  mobile:hidden desktop:block">{nome}</h2>
      </div>
      <div className="flex flex-col justify-center gap-4 laptop:p-4 tablet:p-2 tablet:gap-6 mobile:gap-6">
        <span className="bg-secundary-0 rounded-md font-raleway font-bold w-28 text-detail-0">🧐 Sobre mim</span>

        <p className="text-detail-0/80 font-raleway font-bold text-2xl desktop:text-xl laptop:text-base tablet:text-sm mobile:text-sm mobile:p-2">
          👋 Me chamo {nome}, mas pode me chamar apenas de Lázaro. Prazer!
        </p>

        <span className="tablet:flex tablet:flex-col tablet:gap-4 mobile:flex mobile:flex-col mobile:gap-3 mobile:p-2">
          <p className="text-detail-0/75 font-raleway font-bold laptop:text-sm tablet:text-xs mobile:text-xs">
            👨‍💻 Há mais de 1 ano desenvolvendo e programando interfaces com
            Html, Css, JS e React.
          </p>
          <p className="text-white/75 font-raleway font-bold laptop:text-sm tablet:text-xs mobile:text-xs">
            🎓 Graduando em Análise e Desenvolvimento de Sistemas, pela Unigranrio Afya do
            Rio de Janeiro, Duque de Caxias.
          </p>
          <p className="text-detail-0/75 font-raleway font-bold laptop:text-sm tablet:text-xs mobile:text-xs">💡 Interesses em desenvolvimento Front-end com React.
          </p>
        </span>

        <p className="text-detail-0/50 font-raleway font-bold laptop:text-sm tablet:text-xs mobile:text-xs mobile:p-2">
          🚀 Tentando ser melhor - <i> Peter Parker - do Tobey Maguire </i>
        </p>
      </div>
    </section>
  );
}
