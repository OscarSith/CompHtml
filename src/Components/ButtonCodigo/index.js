import React from "react";

import { Button } from "./styles";

const ButtonCodigo = ({ texto, handler, disabled }) => {
  return (
    <Button
      disabled={disabled}
      className="btn btn-sm rounded-pill px-5 mb-4 fw-bold fs-5"
      onClick={handler}
    >
      {texto}
    </Button>
  );
};

export { ButtonCodigo };
