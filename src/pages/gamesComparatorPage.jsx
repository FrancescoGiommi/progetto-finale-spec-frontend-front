// importo useState
import { useState, useMemo } from "react";

// Importo il context
import { consumerGames } from "../globalContext/GamesContext";

// Importo la card dei giochi
import CardGame from "../components/CardGame";

export default function GamesComparatorPage() {
  //! Context
  // Prendo la lista dei giochi e le funzioni dal context
  const { gamesList, addToFavorites, isFavorite } = consumerGames();

  //! Stati
  // Contiene i giochi selezionati
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
  const selectedGamesDetails = useMemo(() => {
    return gamesList.filter((game) => selectedGames.includes(game.id));
  }, [gamesList, selectedGames]);

  return (
    <>
      <h1 className="title-pages">Confronta i videogiochi</h1>
      <p className="selected-games">
        Seleziona fino a 2 videogiochi per confrontarli
      </p>
      <p className="p-games-selected">
        Videogiochi selezionati : {selectedGames.length}
      </p>
      <section>
        {/* Se ci sono giochi selezionati ne mostro i dettagli */}
        {selectedGames.length > 0 && (
          <div className="comparator-container">
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
      </section>
      <div className="games-list">
        {/* Lista dei giochi disponibili */}
        {gamesList.map((game) => (
          <div
            key={game.id}
            className={`card-selected ${
              selectedGames.includes(game.id) ? "selected" : ""
            }`}
            onClick={() => handleGameSelect(game.id)}
          >
            {/* Card del gioco */}
            <CardGame
              id={game.id}
              title={game.title}
              image={game.image}
              category={game.category}
              addToFavorites={addToFavorites}
              isFavorite={isFavorite(game.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
