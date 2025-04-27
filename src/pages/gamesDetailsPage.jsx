/* Importo useParams */
import { useParams } from "react-router-dom";

// Importo il context
import { consumerGames } from "../globalContext/GamesContext";

export default function GamesDetailsPage() {
  // Ottengo l'id del gioco dalla URL tramite useParams
  const { id } = useParams();

  //! Context
  // Prendo la lista dei giochi, lista dei preferiti e la funzione dal context
  const { gamesList, addToFavorites, isFavorite } = consumerGames();

  // Trovo il gioco con l'id corrispondente
  const gameDetails = gamesList.find((game) => game.id === parseInt(id));

  // Trasformo l'id in numero intero
  const favoriteGames = isFavorite(parseInt(id));

  // Se non trovo il gioco mostro un messaggio di errore
  if (!gameDetails) {
    return <p>Gioco non trovato o dati non disponibili.</p>;
  }

  return (
    <>
      <h1 className="title-details-page">Dettagli videogioco</h1>
      <section className="game-details">
        <div className="game-details-container">
          {/* Immagine */}
          <img
            className="game-image"
            src={gameDetails.image}
            alt={gameDetails.title}
          />

          <div className="game-details-info">
            {/* Titolo */}
            <h2 className="details-title">{gameDetails.title}</h2>

            {/* Bottone per aggiungere il gioco ai preferiti */}
            <button
              className={`favorite-button details-page ${
                favoriteGames ? "active" : ""
              }`}
              onClick={() => addToFavorites(parseInt(id))}
            >
              <i
                className={`fa-solid fa-heart ${favoriteGames ? "active" : ""}`}
              ></i>
            </button>

            <div className="details-row">
              <div className="details-item">
                {/* Categoria */}
                <h3>Categoria</h3>
                <p>{gameDetails.category}</p>
              </div>
              <div className="details-item">
                {/* Piattaforma */}
                <h3>Piattaforma</h3>
                <p>{gameDetails.platform}</p>
              </div>
            </div>

            <div className="details-row">
              <div className="details-item">
                {/* Anno di rilascio */}
                <h3>Anno di rilascio</h3>
                <p>{gameDetails.releaseYear}</p>
              </div>
              <div className="details-item">
                {/* Voto */}
                <h3>Voto</h3>
                <p>{gameDetails.rating}</p>
              </div>
            </div>

            <div className="details-row">
              <div className="details-item">
                {/* Prezzo */}
                <h3>Prezzo</h3>
                <p>{`${gameDetails.price} €`}</p>
              </div>
              <div className="details-item">
                {/* Tipologia */}
                <h3>Tipologia</h3>
                <p>
                  {gameDetails.multiplayer ? "Multiplayer" : "Single player"}
                </p>
              </div>
            </div>

            <div className="details-full">
              {/* Sviluppatore */}
              <h3>Sviluppatore</h3>
              <p>{gameDetails.developer}</p>
            </div>

            <div className="details-full">
              {/* Descrizione */}
              <h3>Descrizione</h3>
              <p>{gameDetails.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
