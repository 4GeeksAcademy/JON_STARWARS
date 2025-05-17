import React, { useState, useEffect } from "react";
import CardItem from "../components/CardItem";
import { getAll } from "../services/swapi";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => { getAll("planets").then(setPlanets); }, []);
  return (
    <div className="container mt-4">
      <h1 className="text-light mb-4">Explorar Planetas</h1>
      <div className="listing-grid">
        {planets.map(p => (
          <CardItem
            key={p.uid}
            className="card-dark"
            type="planets"
            uid={p.uid}
            name={p.name}
            urlImage={`https://starwars-visualguide.com/assets/img/planets/${p.uid}.jpg`}
          />
        ))}
      </div>
    </div>
  );
}
