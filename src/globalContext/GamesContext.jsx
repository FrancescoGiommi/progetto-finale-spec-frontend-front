// Importo useContext e createContext da react
import { createContext, useContext } from "react";

// importo il custom hook useGames
import { useGames } from "../customHooks/useGames";

// Creo il context per i videogiochi
const GamesContext = createContext();

// Esporto il provider per condividere il contesto
export const GamesProvider = ({ children }) => {
  const { gamesList, addToFavorites, favoritesGamesList, removeFromFavorites } =
    useGames();

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

// Rendo accessibili i dati del context a tutti i componenti
export const consumerGames = () => {
  const context = useContext(GamesContext);
  return context;
};
