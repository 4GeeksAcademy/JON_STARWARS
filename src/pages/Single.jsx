import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../services/swapi";
import DetailCard from "../components/DetailCard";

export default function Single() {
  const { entity, uid } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getOne(entity, uid)
      .then(data => setItem(data))
      .catch(console.error);
  }, [entity, uid]);

  if (!item) {
    return <p className="text-center text-light mt-5">Cargando detalles…</p>;
  }

  return <DetailCard item={item} entity={entity} />;
}
