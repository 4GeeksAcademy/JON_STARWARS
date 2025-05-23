// src/components/DetailCard.jsx
import React from "react";
import { useGlobalContext } from "../store/useGlobalReducer";
import "./DetailCard.scss";

export default function DetailCard({ item, entity }) {
  const { uid, name, properties } = item;
  const { favorites, addFavorite, removeFavorite } = useGlobalContext();
  const isFav = favorites.some(f => f.uid === uid && f.type === entity);

  const toggleFav = () => {
    if (isFav) removeFavorite({ uid, type: entity });
    else       addFavorite({ uid, type: entity, name });
  };

  // IMAGEN
  const imgUrl = properties.image || `/assets/img/placeholder.png`;

  // Descripción
  const description =
    properties.description ||
    properties.opening_crawl ||
    "Sin descripción disponible.";

  // Footer fields a mostrar (filas)
  const footerFields = [
    { label: "Appearances",    value: properties.appearances },
    { label: "Affiliations",   value: properties.affiliations },
    { label: "Locations",      value: properties.locations },
    { label: "Gender",         value: properties.gender },
    { label: "Dimensions",     value: properties.height || properties.dimensions },
    { label: "Species",        value: properties.species },
    { label: "Vehicles",       value: properties.vehicles },
    { label: "Weapons",        value: properties.weapons }
  ];

  return (
    <div className="detail-card card-dark">
      <div className="detail-main">
        <div className="detail-image">
          <img src={imgUrl} alt={name} />
        </div>
        <div className="detail-info">
          +  <button
   className="btn btn-outline-warning btn-fav"
    onClick={toggleFav}
    aria-label={isFav ? "Quitar favorito" : "Añadir favorito"}
  >
+    {isFav ? "★ Quitar" : "☆ Favorito"}
+  </button>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="detail-footer">
        {footerFields.map(({ label, value }) =>
          value && (
            <div key={label} className="footer-item">
              <strong>{label}</strong>
              <ul>
                {Array.isArray(value)
                  ? value.map((x, i) => (
                      <li key={i}>
                        {typeof x === "string" && x.startsWith("http")
                          ? <a href={x} target="_blank" rel="noopener noreferrer">
                              {x.replace(/^.*\//, "")}
                            </a>
                          : x}
                      </li>
                    ))
                  : <li>{value}</li>}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}
