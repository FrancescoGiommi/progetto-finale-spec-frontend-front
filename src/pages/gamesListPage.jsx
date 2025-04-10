import { useState } from "react";
import { Link } from "react-router-dom";

// Importo il contesto per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

// Import la card dei giochi
import CardGame from "../components/cardGame";

export default function GamesListPage() {
  // Uso il contesto per ottenere la lista dei giochi
  const { gamesList } = consumerGames();

  return (
    <>
      <h1>Lista videogiochi</h1>
      <div>
        <div className="games-list">
          {gamesList.length === 0 && <p>Caricamento in corso...</p>}
          {/* Mappo la lista dei giochi e li stampo in delle card */}
          {gamesList.map((game) => (
            <Link
              className="link"
              to={`/gamesDetails/${game.id}`}
              key={game.id}
            >
              {/* Passo le props alla card */}
              <CardGame
                game={game}
                key={game.id}
                title={game.title}
                category={game.category}
                image={game.image}
                platform={game.platform}
                releaseYear={game.releaseYear}
                rating={game.rating}
                price={game.price}
                multiplayer={game.multiplayer}
                developer={game.developer}
                description={game.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
