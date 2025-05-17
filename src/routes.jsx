import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout    from "./pages/Layout";       // crea este wrapper
import Home      from "./pages/Home";
import Demo      from "./pages/Demo";
import Planets   from "./pages/Planets";
import Vehicles  from "./pages/Vehicles";
import Favorites from "./pages/Favorites";
import Single    from "./pages/Single";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index           element={<Home />} />
          <Route path="demo"     element={<Demo />} />
          <Route path="planets"  element={<Planets />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="single/:type/:uid" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
