// src/components/Loader.jsx
import React from 'react';

export default function Loader() {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Cargando…</span>
      </div>
    </div>
  );
}
