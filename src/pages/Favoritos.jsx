// src/pages/Favoritos.jsx
import React from "react";
import SectionCarousel from "../components/SectionCarousel";
import { useGlobalContext } from "../store/useGlobalReducer";

export default function Favoritos() {
  const { favorites } = useGlobalContext();

  if (favorites.length === 0) {
    return (
      <div className="text-center text-light mt-5">
        <p>No tienes favoritos aún.</p>
      </div>
    );
  }

  return (
    <div className="listing-grid my-4">
      {favorites.map(fav => (
        <SectionCarousel
          key={`${fav.type}-${fav.uid}`}
          title={null}            // sin header para no repetir
          type={fav.type}
          forcedItems={[fav]}     // forzamos a renderizar solo este ítem
          slots={1}               // un slot para que no pinte placeholders extra
        />
      ))}
    </div>
  );
}
