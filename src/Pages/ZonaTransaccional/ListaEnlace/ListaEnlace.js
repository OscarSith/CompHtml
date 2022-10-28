import React from "react";

import { Enlace } from "./styles";

const ListaEnlace = ({ enlace, handler, active }) => {
  const idLista = "#" + enlace.id;
  const classes =
    "rounded rounded-1 shadow-sm " + (active === enlace.id ? "active" : "");

  return (
    <Enlace className={classes}>
      <a
        href={idLista}
        className="py-2 px-3 d-block text-decoration-none"
        onClick={handler}
      >
        {enlace.nombre}
      </a>
    </Enlace>
  );
};

export { ListaEnlace };
