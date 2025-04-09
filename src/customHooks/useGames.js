import { useEffect, useState } from "react";

export default function useGames() {
  /* Lista dei giochi */
  const [gamesList, setGamesList] = useState([]);
  const gamesUrl = import.meta.env.VITE_BACKEND_URL;

  console.log("gamesUrl:", import.meta.env.VITE_BACKEND_URL);

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

  useEffect(() => {
    gamesFetch();
  }, []);
}
