import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "@src/Header/Header";
import { Footer } from "./Footer";

import "./App.css";
import { Home } from "./Pages/Home";
import { CodigoSeguridad } from "./Pages/CodigoSeguridad";
import { ValidarCodigoSeguridad } from "./Pages/ValidarCodigoSeguridad";
import { AdministrarMisDatos } from "./Pages/AdministrarMisDatos";
import { ZonaTransaccional } from "./Pages/ZonaTransaccional";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container pb-4 pt-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zona-transaccional" element={<ZonaTransaccional />} />
            <Route
              path="/zona-transaccional/codigo-seguridad"
              element={<CodigoSeguridad />}
            />
            <Route
              path="/zona-transaccional/validar-codigo-seguridad"
              element={<ValidarCodigoSeguridad />}
            />
            <Route
              path="/zona-transaccional/administrar-mis-datos"
              element={<AdministrarMisDatos />}
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
