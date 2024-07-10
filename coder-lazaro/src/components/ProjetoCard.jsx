import React from "react";

export function ProjetoCard(props) {
  return (
    <div className="w-96 h-96 border-secundary-0 border-2 rounded-md">
      {/* component de projetos aqui */}

      <div>
        {" "}
        {/* card-header*/}
        <h3>{props.tituloDoProjeto}</h3>
        <p>{props.description}</p>
      </div>

      <div>
        {" "}
        {/* card-tags */}
        <span>{props.tagOne}</span>
        <span>{props.tagTwo}</span>
      </div>

      <div>
        {" "}
        {/* card-image */}
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  );
}
