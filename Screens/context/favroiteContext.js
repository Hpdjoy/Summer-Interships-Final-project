import React, { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavoriteItem: (id) => {},
  removeFromFavoriteItem: (id) => {}
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addFavoriteItem = (id) => {
    setFavoriteItems((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFromFavoriteItem = (id) => {
    setFavoriteItems((currentFavIds) =>
      currentFavIds.filter((currentFavId) => currentFavId !== id)
    );
  };

  const value = {
    ids: favoriteItems,
    addFavoriteItem,
    removeFromFavoriteItem
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
