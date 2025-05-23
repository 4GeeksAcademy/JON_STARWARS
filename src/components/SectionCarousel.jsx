// src/components/SectionCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import CardItem from "./CardItem";
import Loader from "./Loader";
import { useGlobalContext } from "../store/useGlobalReducer";
import "./SectionCarousel.scss";

export default function SectionCarousel({
  type,
  title,
  slots = 10,
  forcedItems
}) {
  const trackRef = useRef();
  const [items, setItems]     = useState([]);
  const [loading, setLoading] = useState(!forcedItems);
  const { favorites, addFavorite, removeFavorite } = useGlobalContext();

  useEffect(() => {
    if (forcedItems) {
      setItems(forcedItems);
      setLoading(false);
    } else {
      setLoading(true);
      import("../services/swapi").then(({ getAll }) =>
        getAll(type)
          .then(results => setItems(results))
          .catch(() => setItems([]))
          .finally(() => setLoading(false))
      );
    }
  }, [type, forcedItems]);

  const toggleFav = item => {
    const exists = favorites.some(f => f.uid === item.uid && f.type === type);
    if (exists) removeFavorite({ ...item, type });
    else       addFavorite({ ...item, type });
  };

  const scrollBy = offset => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="databank-section">
      {title && (
        <div className="section-header">
          <h2>{title}</h2>
          
        </div>
      )}

      <div className="carousel">
        <button
          className="arrow prev"
          onClick={() => scrollBy(-trackRef.current.offsetWidth * 0.8)}
          aria-label="Anterior"
        >
          &#8249;
        </button>

        <ul className="carousel-track" ref={trackRef}>
          {loading
            ? Array.from({ length: slots }).map((_, i) => (
                <li key={i} className="col item">
                  <Loader />
                </li>
              ))
            : (forcedItems ? items : items.slice(0, slots)).map(item => (
                <CardItem
                  key={`${type}-${item.uid}`}
                  item={item}
                  entity={type}
                  isFav={favorites.some(
                    f => f.uid === item.uid && f.type === type
                  )}
                  onToggleFav={toggleFav}
                />
              ))}
        </ul>

        <button
          className="arrow next"
          onClick={() => scrollBy(trackRef.current.offsetWidth * 0.8)}
          aria-label="Siguiente"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
