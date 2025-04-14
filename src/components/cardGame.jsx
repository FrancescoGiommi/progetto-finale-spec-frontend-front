export default function CardGame({
  game,
  isFavorite,
  addToFavorites,
  readonly = false,
}) {
  return (
    <div key={game.id} className="game-card">
      <img src={game.image} alt={game.name} />

      {/* Mostra il cuore solo se NON in readonly */}
      {!readonly && (
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            addToFavorites(game.id);
          }}
        >
          <i className={`fa-solid fa-heart ${isFavorite ? "active" : ""}`}></i>
        </button>
      )}

      {/* Se è readonly, mostra solo il cuore rosso se è nei preferiti */}
      {readonly && isFavorite && (
        <div className="readonly-favorite">
          <i className="fa-solid fa-heart active"></i>
        </div>
      )}

      <h2>{game.title}</h2>
      <p>{game.category}</p>
    </div>
  );
}
