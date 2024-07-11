/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export function ProjetoCard(props) {
  return (
    <div className="w-96 h-96  rounded-3xl backdrop-blur-sm">
      {/* component de projetos aqui */}

      <div>
        {" "}
        {/* card-header*/}
        <h3 className="text-detail-0 font-raleway font-bold pl-3 pt-2">{props.tituloDoProjeto}</h3>
        <p className="text-detail-0/45 font-raleway font-semibold pl-3 pt-2">{props.description}</p>
      </div>

      <div className="flex gap-4 text-center">
        {" "}
        {/* card-tags */}
        <span className="bg-secundary-0 text-detail-0 border-2 border-secundary-0 rounded-md m-2 w-16">{props.tagOne}</span>
        <span className="bg-secundary-0 text-detail-0 border-2 border-secundary-0 rounded-md m-2 w-16">{props.tagTwo}</span>
      </div>

      <div>
        {" "}
        {/* card-image */}
        <a href={props.link} target="_blank"><img src={props.image} alt={props.alt}  className=" rounded-3xl"/></a>
      </div>
    </div>
  );
}
