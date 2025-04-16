import React from "react";

const CardGame = ({ game, isFavorite, addToFavorites }) => {
  return (
    <div key={game.id} className="game-card">
      {/* Immagine */}
      <img src={game.image} alt={game.name} />

      {/* Bottone per aggiungere il gioco ai preferiti */}
      <button
        className={`favorite-button  ${isFavorite ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          addToFavorites(game.id);
        }}
      >
        <i className={`fa-solid fa-heart ${isFavorite ? "active" : ""}`}></i>
      </button>
      {/* Titolo */}
      <h2>{game.title}</h2>

      {/* Categoria */}
      <p>{game.category}</p>
    </div>
  );
};

export default React.memo(CardGame);
