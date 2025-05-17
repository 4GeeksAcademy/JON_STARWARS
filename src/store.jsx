import React, { createContext } from "react";
import useGlobalReducer from "./hooks/useGlobalReducer";

export const GlobalContext = createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = useGlobalReducer();
  const addFavorite    = item => dispatch({ type: "ADD_FAVORITE", payload: item });
  const removeFavorite = item => dispatch({ type: "REMOVE_FAVORITE", payload: item });

  return (
    <GlobalContext.Provider value={{ state, addFavorite, removeFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
}
