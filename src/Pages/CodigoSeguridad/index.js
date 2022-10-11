import React from "react";

import { ContenedorMedios, BotonEnviarCodigo } from "./styles";

const CodigoSeguridad = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-5 my-5">
        <div className="card text-center shadow border-0 rounded-4">
          <div className="card-body">
            <h2 className="card-title fs-1 border-bottom border-2 pb-3 pt-2 mb-4">
              Codigo de seguridad
            </h2>
            <p className="card-text px-3">
              Estimado usuario: <br />
              La seguridad de tu información personal es nuestro mayor interés.
              Enviaremos un <strong>código de seguridad</strong> para validad tu
              identidad.
            </p>
            <p>
              <small>
                Se enviará el código a los siguientes medios registrados:
              </small>
            </p>
            <div className="row justify-content-center mb-4">
              <ContenedorMedios className="col-9 py-2 rounded-3">
                <div className="row">
                  <div className="col-6">
                    <h6 className="small fw-normal mb-1">Mensaje de texto</h6>
                    <strong className="cellphone-number">315***17**</strong>
                  </div>
                  <div className="col-6 ps-0">
                    <h6 className="small fw-normal mb-1">Correo electrónico</h6>
                    <strong>os****12@g**l.com</strong>
                  </div>
                </div>
              </ContenedorMedios>
            </div>
            <BotonEnviarCodigo
              type="button"
              className="btn btn-sm rounded-pill px-5 mb-4 fw-bold fs-5"
            >
              Enviar código
            </BotonEnviarCodigo>
            <p>
              <small>
                Si los datos de contacto no son correctos{" "}
                <a href="#">haga clic aquí</a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CodigoSeguridad };
