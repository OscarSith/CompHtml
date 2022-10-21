import React from "react";
import { useNavigate } from "react-router-dom";

import { MigaPan } from "@/Components/MigaPan";
import { ContenedorCodigo } from "@/Components/ContenedorCodigo";
import { ButtonCodigo } from "@/Components/ButtonCodigo";

import { ContenedorMedios } from "./styles";

const CodigoSeguridad = () => {
  const navigate = useNavigate();

  const handlerNextPage = () => {
    navigate("/zona-transaccional/validar-codigo-seguridad");
  };

  return (
    <>
      <MigaPan />
      <ContenedorCodigo>
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
        <ButtonCodigo texto="Enviar código" handler={handlerNextPage} />
        <p>
          <small>
            Si los datos de contacto no son correctos&nbsp;
            <a href="#">haga clic aquí</a>
          </small>
        </p>
      </ContenedorCodigo>
    </>
  );
};

export { CodigoSeguridad };
