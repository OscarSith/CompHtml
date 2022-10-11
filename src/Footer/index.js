import React from "react";
import { MainFooter } from "./styles";

const Footer = () => {
  return (
    <MainFooter>
      <div className="container pt-5">
        <div className="row">
          <div className="col-3">
            <h5 className="mb-4">Conoce más</h5>
            <ul className="list-unstyled">
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Compensar salud
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Tienda salud
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Centro permanencia Fusagasugá
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Agencia de empleo y emprendimiento
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Proveedores
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Preguntas frecuentes
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Trabaja con nosotros
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Te escuchamos
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Mapa del sitio
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h5 className="mb-4">Te puede interesar</h5>
            <ul className="list-unstyled">
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Certificaciones de calidad
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Derechos y deberes
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Notificaciones judiciales
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Políticas de privacidad y condiciones de uso
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Transparencia y acceso a la información pública
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Líneas de atención
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-decoration-none text-body">
                  Emisora UCompensar
                </a>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col">
                <h5 className="mb-4">Síguenos</h5>
                <ul className="list-unstyled"></ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h5 className="mb-4">
                  Caja de compensación familiar - Sede principal
                </h5>
                <p>Avenida 68 # 49A-47, Bogotá D.C</p>
                <p>Bogotá: 601 3077001 Línea nacional: 01 8000 96 7070</p>
              </div>
              <div className="col-12">
                <h5 className="mb-4 mt-4">Compensar Salud</h5>
                <p>Avenida 68 # 49A-47, Bogotá D.C</p>
                <p>Bogotá: 601 3077001 Línea nacional: 01 8000 96 7070</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainFooter>
  );
};

export { Footer };
