import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout     from "./pages/Layout.jsx";
import Personajes from "./pages/Personajes.jsx";
import Planetas   from "./pages/Planetas.jsx";
import Vehicles   from "./pages/Vehiculos.jsx";
import Favorites  from "./pages/Favoritos.jsx";
import Single     from "./pages/Single.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"                    element={<Personajes />} />
          <Route path="/planets"             element={<Planetas />} />
          <Route path="/vehicles"            element={<Vehicles />} />
          <Route path="/favorites"           element={<Favorites />} />
          <Route path="/single/:type/:uid"   element={<Single />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
