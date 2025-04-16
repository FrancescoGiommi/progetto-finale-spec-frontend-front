// importo useState
import { useState } from "react";

// Importo il contesto per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

// Importo la card dei giochi
import CardGame from "../components/cardGame";

export default function GamesComparatorPage() {
  //! Context
  // Uso il contesto per ottenere la lista dei giochi
  const { gamesList, addToFavorites, favoritesGamesList } = consumerGames();

  //! Stati
  // Contiene gli ID dei giochi selezionati
  const [selectedGames, setSelectedGames] = useState([]);

  //! Funzioni
  // Funzione per gestire la selezione/deselezione di un gioco
  const handleGameSelect = (id) => {
    if (selectedGames.includes(id)) {
      setSelectedGames(selectedGames.filter((gameId) => gameId !== id));
    } else if (selectedGames.length < 2) {
      setSelectedGames([...selectedGames, id]);
    }
  };

  // Restituisce i dettagli completi dei giochi selezionati
  const selectedGamesDetails = gamesList.filter((game) =>
    selectedGames.includes(game.id)
  );

  return (
    <>
      <h1>Confronta i giochi</h1>
      <p className="selected-games">
        Seleziona fino a 2 giochi per confrontarli
      </p>
      <section className="games-comparator">
        <div className="comparator-container">
          {/* Se ci sono giochi selezionati ne mostro i dettagli */}
          {selectedGames.length > 0 && (
            <div className="comparator-flex">
              {/* Mostro i dettagli per ogni gioco */}
              {selectedGamesDetails.map((game) => (
                <div key={game.id} className="comparator-card">
                  <div>
                    {/* Immagine */}
                    <img src={game.image} alt={game.title} />
                  </div>
                  <div>
                    {/* Titolo */}
                    <h2 className="details-title">{game.title}</h2>
                    <p>
                      {/* Categoria */}
                      <strong>Categoria:</strong> {game.category}
                    </p>
                    <p>
                      {/* Piattaforma */}
                      <strong>Piattaforma:</strong> {game.platform}
                    </p>
                    <p>
                      {/* Anno di rilascio */}
                      <strong>Anno di rilascio:</strong> {game.releaseYear}
                    </p>
                    <p>
                      {/* Voto */}
                      <strong>Voto:</strong> {game.rating}
                    </p>
                    <p>
                      {/* Prezzo */}
                      <strong>Prezzo:</strong> {game.price} €
                    </p>
                    <p>
                      {/* Tipologia */}
                      <strong>Tipologia:</strong>{" "}
                      {game.multiplayer ? "Multiplayer" : "Single Player"}
                    </p>
                    <p>
                      {/* Sviluppatore */}
                      <strong>Sviluppatore:</strong> {game.developer}
                    </p>
                    <p>
                      {/* Descrizione */}
                      <strong>Descrizione:</strong> {game.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <div className="games-list">
        {/* Mostro la lista dei giochi disponibili */}
        {gamesList.map((game) => (
          <div
            key={game.id}
            className={`card-selected ${
              selectedGames.includes(game.id) ? "selected" : ""
            }`}
            onClick={() => handleGameSelect(game.id)}
          >
            <CardGame
              game={game}
              addToFavorites={addToFavorites}
              isFavorite={favoritesGamesList.includes(game.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
