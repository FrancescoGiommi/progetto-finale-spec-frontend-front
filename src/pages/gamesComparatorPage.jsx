import { useState } from "react";

// Importo il contesto per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

// Import la card dei giochi
import CardGame from "../components/cardGame";

export default function GamesComparatorPage() {
  //! Context
  // Uso il contesto per ottenere la lista dei giochi
  const { gamesList } = consumerGames();

  const [selectedGames, setSelectedGames] = useState([]);
  const [showSelectedGames, setShowSelectedGames] = useState(false);

  return (
    <>
      <h1>Confronta i giochi</h1>
      <section className="games-comparator">
        <div className="comparator-container">
          {/* Qui andrà il codice per il confronto dei giochi */}
          <p>Seleziona i giochi da confrontare.</p>
        </div>
      </section>
      <div className="games-list">
        {gamesList.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
