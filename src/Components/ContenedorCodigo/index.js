import React from "react";

const ContenedorCodigo = ({ children }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-5 my-5">
        <div className="card text-center shadow border-0 rounded-4">
          <div className="card-body">
            <h2 className="card-title fs-1 border-bottom border-2 pb-3 pt-2 mb-4">
              Codigo de seguridad
            </h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContenedorCodigo };
