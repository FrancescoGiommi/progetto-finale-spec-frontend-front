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
        <div className="favorites-container">
          {favoriteGames.length > 0 ? (
            favoriteGames.map((game) => (
              <div key={game.id} className="favorites-card game-card">
                <img src={game.image} alt={game.title} />
                <h2>{game.title}</h2>
                <p>{game.category}</p>
                <button onClick={() => removeFromFavorites(game.id)}>
                  Rimuovi dai preferiti
                </button>
              </div>
            ))
          ) : (
            <p>Nessun gioco nei preferiti</p>
          )}
        </div>
      </section>
    </>
  );
}
