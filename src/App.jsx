import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Starfield from './components/Starfield';

import Home from './pages/Home';           // opcional landing
import Personajes from './pages/Personajes';
import Planetas   from './pages/Planetas';
import Vehiculos  from './pages/Vehiculos';
import Favorites  from './pages/Favoritos';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Starfield />
      <Navbar />
      <main className="flex-grow-1 container my-4">
        <Routes>
          <Route path="/" element={<Navigate to="/personajes" replace />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/planetas"   element={<Planetas />} />
          <Route path="/vehiculos"  element={<Vehiculos />} />
          <Route path="/favoritos"  element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
