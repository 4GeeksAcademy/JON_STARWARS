import React, { useState, useEffect } from "react";
import CardItem from "../components/CardItem";
import { getAll } from "../services/swapi";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => { getAll("vehicles").then(setVehicles); }, []);
  return (
    <div className="container mt-4">
      <h1 className="text-light mb-4">Explorar Vehículos</h1>
      <div className="listing-grid">
        {vehicles.map(v => (
          <CardItem
            key={v.uid}
            className="card-dark"
            type="vehicles"
            uid={v.uid}
            name={v.name}
            urlImage={`https://starwars-visualguide.com/assets/img/vehicles/${v.uid}.jpg`}
          />
        ))}
      </div>
    </div>
  );
}
