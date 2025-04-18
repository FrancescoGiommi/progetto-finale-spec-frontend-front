export default function CardGame({
  id,
  title,
  image,
  category,
  isFavorite,
  addToFavorites,
}) {
  return (
    <div key={id} className="game-card">
      {/* Immagine */}
      <img src={image} alt={title} />

      {/* Bottone per aggiungere il gioco ai preferiti */}
      <button
        className={`favorite-button ${isFavorite ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          addToFavorites(id);
        }}
      >
        <i className={`fa-solid fa-heart ${isFavorite ? "active" : ""}`}></i>
      </button>
      {/* Titolo */}
      <h2>{title}</h2>

      {/* Categoria */}
      <p>{category}</p>
    </div>
  );
}
