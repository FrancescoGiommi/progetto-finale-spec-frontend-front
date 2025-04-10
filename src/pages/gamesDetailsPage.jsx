import { useParams } from "react-router-dom";
// Importo il contesto per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

export default function GamesDetailsPage({}) {
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
          <img src={gameDetails.image} alt="" />
          <div>
            <p>Categoria</p>
            <p>{gameDetails.category}</p>
          </div>
          <div>
            <p>Piattaforma </p>
            <p>{gameDetails.platform}</p>
          </div>
          <div>
            <p>Anno di rilascio</p>
            <p>{gameDetails.releaseYear}</p>
          </div>
          <div>
            <p>Voto </p>
            <p>{gameDetails.rating}</p>
          </div>
          <div>
            <p>Prezzo </p>
            {gameDetails.price}
          </div>
          <div>
            <p>Tipo</p>
            <p>{gameDetails.multiplayer}</p>
          </div>
          <div>
            <p>Sviluppatore </p>
            <p>{gameDetails.developer}</p>
          </div>
          <div>
            <p>Descrizione </p>
            <p>{gameDetails.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
