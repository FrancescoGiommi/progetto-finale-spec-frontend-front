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

      if (!response.ok) {
        // Se la risposta arriva ma ha uno status di errore
        throw new Error("Errore nella risposta del server");
      }

      const data = await response.json();
      setGamesList(data);
    } catch (error) {
      // Cattura sia errori di rete, sia l'errore lanciato sopra
      console.error("Errore durante il recupero dei dati:", error.message);
    }
  };

  // Funzione per aggiungere un gioco ai preferiti
  const addToFavorites = (gameId) => {
    setFavoritesGamesList((prevFavorites) => {
      const isFavorite = prevFavorites.includes(gameId);
      if (!isFavorite) {
        return [...prevFavorites, gameId];
      } else {
        return prevFavorites;
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
