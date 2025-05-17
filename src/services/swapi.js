const BASE = "https://www.swapi.tech/api";

export async function getAll(type) {
  const res = await fetch(`${BASE}/${type}`);
  const { results } = await res.json();
  return results;
}

export async function getOne(type, uid) {
  const res = await fetch(`${BASE}/${type}/${uid}`);
  const { result } = await res.json();
  return result;
}
