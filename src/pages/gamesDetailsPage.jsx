import { useParams } from "react-router-dom";
// Importo il contesto per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

export default function GamesDetailsPage() {
  // Uso useParams per ottenere l'id del gioco dalla URL
  const id = useParams().id;

  //! Context
  // Uso il contesto per ottenere la lista dei giochi
  const { gamesList } = consumerGames();

  // Uso il metodo find per trovare il gioco con l'id corrispondente
  const gameDetails = gamesList.find((game) => game.id === parseInt(id));
  console.log(gameDetails);

  // Se non ci sono dettagli del gioco mostro un messaggio di caricamento
  if (!gameDetails) {
    return <p>Caricamento in corso...</p>;
  }

  return (
    <>
      <h1>Dettagli gioco</h1>
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
