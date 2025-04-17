import { consumerGames } from "../globalContext/GamesContext";

export default function GamesFavoritesPage() {
  const { removeFromFavorites, favoritesGamesList, gamesList } =
    consumerGames();

  const favoriteGames = gamesList.filter((game) =>
    favoritesGamesList.includes(game.id)
  );

  return (
    <>
      <h1>Preferiti</h1>
      <section className="games-favorites">
        <div className="favorites-container games-list">
          {favoriteGames.map((game) => (
            <div key={game.id} className="game-card">
              <img src={game.image} alt={game.title} />
              <h2>{game.title}</h2>
              <p>{game.category}</p>
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
