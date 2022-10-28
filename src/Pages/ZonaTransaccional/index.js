import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { MigaPan } from "@src/Components/MigaPan";
import { ListaEnlace } from "./ListaEnlace/ListaEnlace";

import {
  CardTransaccional,
  CardTransaccionalHeader,
  CardTransaccionalBody,
  Avatar,
  EnlaceFinal,
} from "./styles";

const ZonaTransaccional = () => {
  const [listaEnlaces, setListaEnlaces] = useState([]);
  const [listaSubEnlaces, setListaSubEnlaces] = useState([]);
  const [enlaceSeleccionado, setEnlaceSeleccionado] = useState();
  const [subEnlaceSeleccionado, setSubEnlaceSeleccionado] = useState();
  const [enlaceFinal, setEnlaceFinal] = useState();

  useEffect((_) => {
    fetch("http://localhost:3002/ProyectoPrueba/enlaces.php")
      .then((response) => response.json())
      .then((enlaces) => {
        setListaEnlaces(enlaces);
      });
  }, []);

  const handlerEnlaces = (event) => {
    event.preventDefault();

    const idLista = obtenerIdFromHref(event);
    const subEnlaces = listaEnlaces.filter(
      (enlace) => enlace.parentesco === idLista
    );

    setListaSubEnlaces(subEnlaces);
    setEnlaceSeleccionado(idLista);
    setEnlaceFinal(null);
  };

  const handlerSubEnlaces = (event) => {
    event.preventDefault();

    const idLista = obtenerIdFromHref(event);
    const enlaceFinal = listaEnlaces.find((enlace) => enlace.id === idLista);
    setSubEnlaceSeleccionado(idLista);
    setEnlaceFinal(enlaceFinal);
  };

  const obtenerIdFromHref = (event) =>
    parseInt(event.target.getAttribute("href").substr(1));

  return (
    <>
      <MigaPan />
      <div className="row">
        <div className="col">
          <h2 className="mb-3">Bienvenido a la zona transaccional</h2>
          <div className="row">
            <div className="col">
              <CardTransaccional className="card border-0">
                <div className="card-body p-4">
                  <CardTransaccionalHeader className="p-3 d-flex rounded shadow-sm">
                    <Avatar>M</Avatar>
                    <div className="align-self-center ms-3">
                      <h5 className="card-title mb-0 pb-2">
                        MARÍA JOSÉ PÉREZ GÓMEZ
                      </h5>
                      <h6 className="card-subtitle mb-0">CC 100029172</h6>
                    </div>
                  </CardTransaccionalHeader>
                  <CardTransaccionalBody className="mt-4">
                    <p className="card-text strong fs-5">
                      Transacciones disponibles para ti
                    </p>
                    <div className="row mb-3">
                      <div className="col-3">
                        <ul className="list-unstyled">
                          {listaEnlaces
                            .filter((enlace) => enlace.parentesco === 0)
                            .map((enlace) => {
                              return (
                                <ListaEnlace
                                  enlace={enlace}
                                  key={enlace.id}
                                  handler={handlerEnlaces}
                                  active={enlaceSeleccionado}
                                />
                              );
                            })}
                        </ul>
                      </div>
                      <div className="col-5">
                        <ul className="list-unstyled">
                          {listaSubEnlaces.map((enlace) => {
                            return (
                              <ListaEnlace
                                enlace={enlace}
                                key={enlace.id}
                                handler={handlerSubEnlaces}
                                active={subEnlaceSeleccionado}
                              />
                            );
                          })}
                        </ul>
                      </div>
                      <div className="col-4">
                        {enlaceFinal ? (
                          <EnlaceFinal className="card border-0 p-2">
                            <div className="card-body">
                              <h5 className="card-title pb-3 border-bottom mb-4">
                                {enlaceFinal.nombre}
                              </h5>
                              <p className="card-text mb-4">
                                {enlaceFinal.descripcion}
                              </p>
                              <div className="d-grid gap-2">
                                <Link
                                  to={enlaceFinal.url}
                                  className="btn btn-danger rounded-0 rounded-end border-0"
                                >
                                  {enlaceFinal.nombre}
                                  <FontAwesomeIcon
                                    className="float-end fa-lg"
                                    icon={solid("circle-arrow-right")}
                                  />
                                </Link>
                              </div>
                            </div>
                          </EnlaceFinal>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </CardTransaccionalBody>
                </div>
              </CardTransaccional>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ZonaTransaccional };
