// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { getAll } from "../services/swapi";
import SectionCarousel from "../components/SectionCarousel";

export default function Home() {
  // 1) Estados para cada lista y para el loading
  const [people, setPeople]     = useState([]);
  const [planets, setPlanets]   = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading]   = useState(true);

  // 2) useEffect para cargar todo al montar
  useEffect(() => {
    async function loadAll() {
      setLoading(true);
      try {
        const [ppl, pls, vhs] = await Promise.all([
          getAll("people", 1),
          getAll("planets", 1),
          getAll("vehicles", 1),
        ]);
        setPeople(ppl);
        setPlanets(pls);
        setVehicles(vhs);
      } catch (err) {
        console.error("Error cargando datos:", err);
        // opcional: podrías setear estados a [] aquí
      } finally {
        setLoading(false);
      }
    }
    loadAll();
  }, []);

  // 3) Mientras carga, muestro un mensaje o spinner global
  if (loading) {
    return (
      <p className="text-center text-light mt-5">
        Cargando datos, por favor espera…
      </p>
    );
  }

  // 4) Cuando ya hay datos, renderizo los tres carruseles
  return (
    <>
      <SectionCarousel
        title="Personajes"
        type="people"
        items={people.map(p => ({ uid: p.uid, name: p.name, entity: "people" }))}
        slots={10}
      />

      <SectionCarousel
        title="Planetas"
        type="planets"
        items={planets.map(p => ({ uid: p.uid, name: p.name, entity: "planets" }))}
        slots={10}
      />

      <SectionCarousel
        title="Vehículos"
        type="vehicles"
        items={vehicles.map(v => ({
          uid: v.uid,
          name: v.name || v.model,
          entity: "vehicles"
        }))}
        slots={10}
      />
    </>
  );
}
