import React from "react";

const nome = "Lázaro Kauã Rocha da Silva";

export function AboutMe() {
  return (
    <>
      <div>{/* imagem profile */}</div>
      <div>
        <span>🧐 Sobre mim</span>

        <h2>{nome}</h2>

        <p>
          👋 Me chamo {nome}, mas pode me chamar apenas de Henrique. Prazer!
        </p>

        <span>
          <p>
            👨‍💻 Há mais de 1 ano desenvolvendo e programando interfaces com
            Html, Css, JS e React.
          </p>
          <p>
            🎓 Graduando em Análise e Desenvolvimento de Sistemas, pela Unigranrio Afya do
            Rio de Janeiro, Duque de Caxias.
          </p>
          <p>💡 Interesses em desenvolvimento Front-end com React.
          </p>
        </span>

        <p>
          🚀 Tentando ser um melhor - <i> Peter Parker - do Tobey Maguire </i>
        </p>
      </div>
    </>
  );
}
