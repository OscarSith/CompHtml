import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "@/Header/Header";
import { Footer } from "./Footer";

import "./App.css";
import { Home } from "./Pages/Home";
import { CodigoSeguridad } from "./Pages/CodigoSeguridad";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codigo-seguridad" element={<CodigoSeguridad />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
