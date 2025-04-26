/* Importo useState e useEffect */
import { useEffect, useState } from "react";

export const useGames = () => {
  //! Stati
  /* Lista dei videogiochi */
  const [gamesList, setGamesList] = useState([]);

  /* Lista dei videogiochi preferiti */
  const [favoritesGamesList, setFavoritesGamesList] = useState([]);

  //! URL del backend
  const gamesUrl = import.meta.env.VITE_BACKEND_URL;

  //! Funzioni
  // Funzione per ottenere la lista dei videogiochi
  const gamesFetch = async () => {
    try {
      const response = await fetch(`${gamesUrl}/videogames`);

      if (!response.ok) {
        // Se la risposta arriva ma ha uno status di errore
        throw new Error(
          `Errore nella risposta del server, status ${response.status}`
        );
      }

      const data = await response.json();
      setGamesList(data);
    } catch (error) {
      // Cattura sia errori di rete, sia l'errore lanciato sopra
      console.error("Errore durante il recupero dei dati:", error.message);
    }
  };

  // Funzione per aggiungere un gioco ai preferiti
  const addToFavorites = (id) => {
    setFavoritesGamesList((prevFavorites) => {
      const isFavorite = prevFavorites.includes(id);
      if (!isFavorite) {
        return [...prevFavorites, id];
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

  // Funzione per controllare se un gioco è nei preferiti
  const isFavorite = (gameId) => {
    return favoritesGamesList.includes(gameId);
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
    isFavorite,
  };
};
