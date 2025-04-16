// Importo useContext e createContext da react
import { createContext, useContext } from "react";

// importo il custom hook useGames
import { useGames } from "../customHooks/useGames";

// Creo il contesto per i videogiochi
const GamesContext = createContext();

// Creo il provider per condividere il contesto
export const GamesProvider = ({ children }) => {
  const {
    gamesList,

    addToFavorites,
    favoritesGamesList,
    removeFromFavorites,
  } = useGames();

  return (
    <GamesContext.Provider
      value={{
        gamesList,

        addToFavorites,
        favoritesGamesList,
        removeFromFavorites,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

// Creo una funzione per usare il contesto nei componenti
export const consumerGames = () => {
  const context = useContext(GamesContext);
  return context;
};
