import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../services/swapi";
import { GlobalContext } from "../store";

export default function Single() {
  const { type, uid } = useParams();
  const [item, setItem] = useState(null);
  const { state, addFavorite, removeFavorite } = useContext(GlobalContext);
  const isFav = state.favorites.some(f => f.uid === uid);

  useEffect(() => {
    getOne(type, uid).then(r => setItem(r.properties));
  }, [type, uid]);

  if (!item) return <p className="text-light">Cargando...</p>;

  function toggleFav() {
    const base = {
      type,
      uid,
      name: item.name || item.title,
      urlImage: `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`
    };
    isFav ? removeFavorite(base) : addFavorite(base);
  }

  return (
    <div className="container mt-4">
      <div className="card detail-card">
        <div className="detail-main">
          <div className="detail-image">
            <img
              src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`}
              alt={item.name || item.title}
            />
          </div>
          <div className="detail-info">
            <h2>{item.name || item.title}</h2>
            <button onClick={toggleFav} className="btn btn-fav">
              {isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
            </button>
            <p>{item.description || item.opening_crawl || ""}</p>
          </div>
        </div>
        <div className="detail-footer">
          {Object.entries(item).map(([k, v]) => (
            <div className="footer-item" key={k}>
              <strong>{k.replace(/_/g, " ")}</strong>
              <ul>
                {Array.isArray(v)
                  ? v.map((x,i) => <li key={i}>{x}</li>)
                  : <li>{v}</li>}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
