import React from "react";

import { NavLinks } from "./styles";

const LINKS = [
  {
    id: 1,
    title: "Personas",
    subTitle: "Afiliacion y Servicios de Caja",
  },
  {
    id: 2,
    title: "Empresas",
    subTitle: "Afiliacion y Servicios de Caja",
  },
  {
    id: 3,
    title: "Salud",
    subTitle: "EPS y Plan Complementario",
  },
  {
    id: 4,
    title: "Sobre compensar",
    subTitle: "Información Institucional",
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
                    <a href="#" className="text-decoration-none lh-1 text-dark">
                      <strong className="d-block text-uppercase">
                        {link.title}
                      </strong>
                      <span>{link.subTitle}</span>
                    </a>
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
