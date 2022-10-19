import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ContenedorCodigo } from "@/Components/ContenedorCodigo";
import { ButtonCodigo } from "@/Components/ButtonCodigo";
import { InputCodigo } from "./styles";

const ValidarCodigoSeguridad = () => {
  const CANTIDAD_DIGITOS = 6;

  const form = useRef(null);
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  // const [time, setTime] = useState("01:00");
  let [timeLeft, setTimeLeft] = useState(60);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const codigo = formData.get("codigo");

    if (codigo === "123456") {
      navigate("/administrar-mis-datos", { replace: true });
    }
  };

  const handleChange = (evt) => {
    const newCodigo = evt.target.validity.valid ? evt.target.value : codigo;

    setCodigo(newCodigo);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((time) => --time);
    }, 1000);

    if (timeLeft === 0) {
      navigate("/codigo-seguridad", { replace: true });
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <ContenedorCodigo>
      <div className="card-text px-3">
        <form action="/" ref={form}>
          <p className="mb-3">
            El <strong>código de seguridad</strong> fue enviado a los medios
            registrados.
          </p>
          <p className="mb-3">
            <small>Por favor ingrese el código enviado:</small>
          </p>
          <InputCodigo
            type="text"
            className="form-control w-50 mx-auto mb-4 fw-bold text-center"
            name="codigo"
            pattern="[0-9]*"
            onInput={handleChange}
            maxLength={CANTIDAD_DIGITOS}
            value={codigo}
            autoComplete="off"
          />
          <ButtonCodigo
            urlTo="/mis-datos"
            texto="Validar código"
            handler={handleSubmit}
            disabled={codigo.length !== CANTIDAD_DIGITOS}
          />
          <div className="mb-2">
            <small>
              Tiempo restante{" "}
              <strong>
                {timeLeft === 60
                  ? "01:00"
                  : "00:" +
                    (timeLeft.toString().length === 1
                      ? "0" + timeLeft
                      : timeLeft)}
              </strong>
            </small>
          </div>
          <div>
            <small>
              No llego el código? <strong>Enviar código nuevo</strong>
            </small>
          </div>
        </form>
      </div>
    </ContenedorCodigo>
  );
};

export { ValidarCodigoSeguridad };
