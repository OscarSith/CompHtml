import React from "react";
import "./App.css";
import { Header } from "@/Header/Header";
import { Footer } from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container py-4">
          <div className="row">
            <div className="col">
              <h2>Página principal</h2>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
