// src/store/useGlobalReducer.jsx
import React, { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = { favorites: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favorites: state.favorites.filter(
          f => !(f.type === action.payload.type && f.uid === action.payload.uid)
        )
      };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addFavorite    = item => dispatch({ type: "ADD_FAV",    payload: item });
  const removeFavorite = item => dispatch({ type: "REMOVE_FAV", payload: item });

  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
