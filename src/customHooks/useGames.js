/* Importo useState e useEffect */
import { useEffect, useState } from "react";

export const useGames = () => {
  //! Stati
  /* Lista dei giochi */
  const [gamesList, setGamesList] = useState([]);

  /* Lista dei giochi preferiti */
  const [favoritesGamesList, setFavoritesGamesList] = useState([]);

  //! URL del backend
  const gamesUrl = import.meta.env.VITE_BACKEND_URL;

  //! Funzioni
  // Funzione per ottenere la lista dei giochi
  const gamesFetch = async () => {
    try {
      const response = await fetch(`${gamesUrl}/videogames`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Errore nella risposta del server");
      }
      setGamesList(data);
    } catch (error) {
      console.error("Errore durante il fetch dei giochi:", error.message);
    }
  };

  // Funzione per aggiungere un gioco ai preferiti
  const addToFavorites = (gameId) => {
    setFavoritesGamesList((prevFavorites) => {
      const isFavorite = prevFavorites.includes(gameId);
      if (!isFavorite) {
        return [...prevFavorites, gameId];
      } else {
        return prevFavorites.filter((id) => id !== gameId);
      }
    });
  };

  // Funzione per rimuovere un gioco dai preferiti
  const removeFromFavorites = (gameId) => {
    if (favoritesGamesList.includes(gameId)) {
      setFavoritesGamesList((prevFavorites) =>
        prevFavorites.filter((id) => id !== gameId)
      );
    }
  };

  // Uso useEffect per ottenere la lista al caricamento del componente
  useEffect(() => {
    gamesFetch();
  }, []);

  return {
    gamesList,
    addToFavorites,
    favoritesGamesList,
    removeFromFavorites,
  };
};
