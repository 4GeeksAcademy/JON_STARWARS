import React, { useContext } from "react";
import { GlobalContext } from "../store";
import CardItem from "../components/CardItem";

export default function Favorites() {
  const { state } = useContext(GlobalContext);

  return (
    <div className="container mt-4">
      <h1 className="text-light mb-4">Tus Favoritos</h1>
      {state.favorites.length === 0 ? (
        <p className="text-light">No hay elementos guardados.</p>
      ) : (
        <div className="listing-grid">
          {state.favorites.map(f => (
            <CardItem key={f.uid} className="card-dark" {...f} />
          ))}
        </div>
      )}
    </div>
  );
}
