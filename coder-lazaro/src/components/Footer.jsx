import React from "react";

const data = new Date
const ano = data.getFullYear()

export function Footer(){
    return <>
        <section id="footer" className="h-[15vh] flex flex-col justify-center items-center mt-96 bg-black">
            <h2 className="font-raleway text-3xl text-detail-0">Criado com ❤️ por Lázaro Kauã em <span className="text-secundary-0/50">{ano}</span></h2>
        </section>
    </>
}