import React, { useState, useEffect } from "react";
import CardItem from "../components/CardItem";
import { getAll } from "../services/swapi";

export default function Demo() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => { getAll("people").then(setCharacters); }, []);
  return (
    <div className="container mt-4">
      <h1 className="text-light mb-4">Explorar Personajes</h1>
      <div className="listing-grid">
        {characters.map(c => (
          <CardItem
            key={c.uid}
            className="card-dark"
            type="people"
            uid={c.uid}
            name={c.name}
            urlImage={`https://starwars-visualguide.com/assets/img/characters/${c.uid}.jpg`}
          />
        ))}
      </div>
    </div>
  );
}
