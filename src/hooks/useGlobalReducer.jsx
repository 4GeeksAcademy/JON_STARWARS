// useGlobalReducer.js
// Un hook simple con reducer para favoritos

import { useReducer } from "react";

const initialState = { favorites: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(f => f.uid !== action.payload.uid)
      };
    default:
      return state;
  }
}

export default function useGlobalReducer() {
  return useReducer(reducer, initialState);
}
