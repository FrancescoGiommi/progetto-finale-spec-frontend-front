import { useEffect, useState } from "react";

export const useGames = () => {
  /* Lista dei giochi */
  const [gamesList, setGamesList] = useState([]);

  // URL del backend
  const gamesUrl = import.meta.env.VITE_BACKEND_URL;

  // Funzione per ottenere la lista dei giochi
  const gamesFetch = async () => {
    try {
      const response = await fetch(`${gamesUrl}/videogames`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Errore nella risposta del server");
      }
      setGamesList(data);
      console.log(data);
    } catch (error) {
      console.error("Errore durante il fetch dei giochi:", error.message);
    }
  };

  // Uso useEffect per ottenere la lista al caricamento del componente
  useEffect(() => {
    gamesFetch();
  }, []);

  return { gamesList, gamesFetch };
};
