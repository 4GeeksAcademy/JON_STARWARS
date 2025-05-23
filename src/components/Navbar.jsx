import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../store/useGlobalReducer";

export default function Navbar() {
  const { favorites, removeFavorite } = useGlobalContext();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sw-navbar">
      <NavLink to="/">
        <img src="/assets/starwars-logo.jpg" alt="Star Wars" className="sw-logo" />
      </NavLink>

      <ul className="sw-menu">
        <li><NavLink to="/" end>Personajes</NavLink></li>
        <li><NavLink to="/planetas">Planetas</NavLink></li>
        <li><NavLink to="/vehiculos">Vehículos</NavLink></li>
      </ul>

      <div className="sw-fav">
        <button
          className="sw-fav-btn"
          onClick={() => setOpen(o => !o)}
          aria-haspopup="true"
          aria-expanded={open}
        >
          Favoritos ({favorites.length})
        </button>

        <div className={`dropdown ${open ? "show" : ""}`}>
          {favorites.length === 0
            ? <div className="empty">No tienes favoritos aún.</div>
            : favorites.map(fav => (
                <div key={`${fav.type}-${fav.uid}`} className="dropdown-item">
                  <NavLink to={`/${fav.type}/${fav.uid}`} onClick={()=>setOpen(false)}>
                    {fav.name}
                  </NavLink>
                  <button onClick={() => removeFavorite(fav)} aria-label="Eliminar">×</button>
                </div>
              ))
          }
        </div>
      </div>
    </nav>
  );
}
