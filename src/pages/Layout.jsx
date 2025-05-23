// src/pages/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Starfield from "../components/Starfield.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
  return (
    <>
      {/* FONDO DE ESTRELLAS */}
      <Starfield />

      {/* BARRA SUPERIOR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL ENCIMA DEL STARFIELD */}
      <main
        className="content"
        style={{ position: "relative", zIndex: 1, paddingTop: "4rem" }}
      >
        <Outlet />
      </main>

      {/* PIE DE PÁGINA */}
      <Footer />
    </>
  );
}
