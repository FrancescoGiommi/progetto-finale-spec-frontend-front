export default function CardGame({
  game,
  isFavorite,
  addToFavorites,
  hideFavorite,
}) {
  return (
    <div key={game.id} className="game-card">
      <img src={game.image} alt={game.name} />

      <button
        className={`favorite-button  ${isFavorite ? "active" : ""} ${
          hideFavorite ? "hidden" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          addToFavorites(game.id);
        }}
      >
        <i className={`fa-solid fa-heart ${isFavorite ? "active" : ""}`}></i>
      </button>

      <h2>{game.title}</h2>
      <p>{game.category}</p>
    </div>
  );
}
