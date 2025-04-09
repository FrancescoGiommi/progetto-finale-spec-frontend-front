import { useState, useContext } from "react";
import { consumerGames } from "../globalContext/GamesContext";

export default function GamesListPage() {
  // Uso il contesto per ottenere la lista dei giochi
  const { gamesList } = consumerGames();

  return (
    <>
      <h1>Lista videogiochi</h1>
      <div>
        <div className="games-list">
          {gamesList.map((game) => (
            <div key={game.id} className="game-card">
              <img src={game.image} alt={game.name} />
              <h2>{game.title}</h2>
              <p>{game.category}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
