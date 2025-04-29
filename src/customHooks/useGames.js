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
        throw new Error(
          `Errore nella risposta del server, status ${response.status}`
        );
      }

      const data = await response.json();
      setGamesList(data);
    } catch (error) {
      console.error("Errore durante il recupero dei dati:", error.message);
    }
  };

  // Uso useEffect per ottenere la lista al caricamento del componente
  useEffect(() => {
    gamesFetch();
  }, []);

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

  // Funzione per fissare e cambiare colore al bottone dei preferiti
  const isFavorite = (id) => favoritesGamesList.includes(id);

  return {
    gamesList,
    addToFavorites,
    favoritesGamesList,
    removeFromFavorites,
    isFavorite,
  };
};
