// importo il context
import { consumerGames } from "../globalContext/GamesContext";

export default function GamesFavoritesPage() {
  //! Context
  // Prendo la lista dei videogiochi e le funzioni per gestire i preferiti dal context
  const { favoritesGamesList, gamesList, removeFromFavorites } =
    consumerGames();

  //! Funzioni
  // Filtro i giochi per mostrare solo quelli preferiti
  const favoriteGames = gamesList.filter((game) =>
    favoritesGamesList.includes(game.id)
  );

  return (
    <>
      <h1 className="title-favorites-page">Lista preferiti</h1>
      <section className="games-favorites">
        <div className="favorites-container games-list">
          {favoriteGames.map((game) => (
            <div key={game.id} className="game-card">
              {/* Immagine */}
              <img src={game.image} alt={game.title} />

              {/* Titolo */}
              <h2>{game.title}</h2>

              {/* Categoria */}
              <p>{game.category}</p>

              {/* Bottone per rimuovere il gioco dai preferiti */}
              <button
                className="remove-favorite"
                onClick={() => removeFromFavorites(game.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
