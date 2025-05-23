// src/components/CardItem.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function CardItem({ item, onToggleFav, isFav }) {
  const saberSnd = useRef(new Audio('/audio/saber-on.mp3'));
  const playSaber = () => {
    saberSnd.current.currentTime = 0;
    saberSnd.current.play();
  };

  const { uid, name, entity } = item;
  const typeMap = { people: 'characters', planets: 'planets', vehicles: 'vehicles' };
  const folder = typeMap[entity] || entity;
  const imgUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${folder}/${uid}.jpg`;
  const placeholder = '/img/placeholder.png';

  return (
    <li className="col item" onMouseEnter={playSaber}>
      <div
        className="card-dark entity-container ratio-16x9"
        onClick={playSaber}
      >
        <div className="image-container">
          <img
            className="image-card"
            src={imgUrl}
            alt={name}
            onError={e => (e.currentTarget.src = placeholder)}
          />
          <button
            className={`entity-fav-btn${isFav ? ' active' : ''}`}
            onClick={e => {
              e.stopPropagation();
              onToggleFav(item);
            }}
            aria-label={isFav ? 'Quitar favorito' : 'Añadir favorito'}
          >
            ♥
          </button>
        </div>
        <div className="details-container">
          <Link to={`/${entity}/${uid}`} className="title-link">
            <h3 className="details-container-title">{name}</h3>
          </Link>
        </div>
      </div>
    </li>
  );
}
