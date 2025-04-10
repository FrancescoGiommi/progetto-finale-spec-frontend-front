import { useParams } from "react-router-dom";
// Importo il contesto per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

export default function GamesDetailsPage() {
  // Uso useParams per ottenere l'id del gioco dalla URL
  const id = useParams().id;
  const { gamesList } = consumerGames();

  const gameDetails = gamesList.find((game) => game.id === parseInt(id));
  console.log(gameDetails);

  if (!gameDetails) {
    return <p>Caricamento in corso...</p>;
  }

  return (
    <>
      <h1>Dettagli gioco</h1>
      <div>
        <div key={id} className="game-details">
          <h2>{gameDetails.title}</h2>
          <div className="game-details-container">
            <div>
              {/* Immagine del gioco */}
              <img className="image" src={gameDetails.image} alt="image" />
            </div>
            <div className="game-details-info">
              <div>
                {/* Categoria */}
                <p>Categoria</p>
                <p>{gameDetails.category}</p>
              </div>
              <div>
                {/* Piattaforma */}
                <p>Piattaforma </p>
                <p>{gameDetails.platform}</p>
              </div>
              <div>
                {/* Anno di rilascio */}
                <p>Anno di rilascio</p>
                <p>{gameDetails.releaseYear}</p>
              </div>
              <div>
                {/* Voto */}
                <p>Voto </p>
                <p>{gameDetails.rating}</p>
              </div>
              <div>
                {/* Prezzo */}
                <p>Prezzo </p>
                {`${gameDetails.price} €`}
              </div>
              <div>
                {/* Tipologia */}
                <p>Tipologia</p>
                <p>
                  {gameDetails.multiplayer ? "Multiplayer" : "Single player"}
                </p>
              </div>
              <div>
                {/* Sviluppatore */}
                <p>Sviluppatore </p>
                <p>{gameDetails.developer}</p>
              </div>
              <div>
                {/* Descrizione */}
                <p>Descrizione </p>
                <p>{gameDetails.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
