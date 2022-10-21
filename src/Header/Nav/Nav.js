import React from "react";
import { Link } from "react-router-dom";

import { NavLinks } from "./styles";

const LINKS = [
  {
    id: 1,
    title: "Personas",
    subTitle: "Afiliacion y Servicios de Caja",
    url: "/zona-transaccional/codigo-seguridad",
  },
  {
    id: 2,
    title: "Empresas",
    subTitle: "Afiliacion y Servicios de Caja",
    url: "/",
  },
  {
    id: 3,
    title: "Salud",
    subTitle: "EPS y Plan Complementario",
    url: "/",
  },
  {
    id: 4,
    title: "Sobre compensar",
    subTitle: "Información Institucional",
    url: "/",
  },
];

const Nav = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <NavLinks>
            <ul className="list-unstyled d-flex mb-0">
              {LINKS.map((link) => {
                return (
                  <li className="d-flex" key={link.id}>
                    <Link
                      to={link.url}
                      className="text-decoration-none lh-1 text-dark"
                    >
                      <strong className="d-block text-uppercase">
                        {link.title}
                      </strong>
                      <span>{link.subTitle}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </NavLinks>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export { Nav };
