import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../store";

export default function CardItem({ type, uid, name, urlImage, className="" }) {
  const { state, addFavorite, removeFavorite } = useContext(GlobalContext);
  const isFav = state.favorites.some(f => f.uid === uid);

  function handleFav() {
    const item = { type, uid, name, urlImage };
    isFav ? removeFavorite(item) : addFavorite(item);
  }

  return (
    <div className={`card ${className}`}>
      <img
        src={urlImage}
        className="card-img-top"
        alt={name}
        onError={e => e.currentTarget.src = "/img/fallback.jpg"}
      />
      <div className="card-body text-center">
        <h5 className="card-title text-light">{name}</h5>
        <Link to={`/single/${type}/${uid}`} className="btn btn-sm btn-primary me-2">
          Ver
        </Link>
        <button onClick={handleFav} className="btn btn-sm btn-databank">
          {isFav ? "Quitar" : "Favorito"}
        </button>
      </div>
    </div>
  );
}
