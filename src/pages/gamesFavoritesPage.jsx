import { useState } from "react";

// importo il context
import { consumerGames } from "../globalContext/GamesContext";

// Importo la modale
import Modal from "../components/Modal";

export default function GamesFavoritesPage() {
  //! Context
  // Prendo la lista dei videogiochi e le funzioni per gestire i preferiti dal context
  const { favoritesGamesList, gamesList } = consumerGames();

  //! Stati
  // Passo il videogioco selezionato alla modale
  const [modalGame, setModalGame] = useState(null);

  //! Funzioni
  // Filtro i giochi per mostrare solo quelli preferiti
  const favoriteGames = gamesList.filter((game) =>
    favoritesGamesList.includes(game.id)
  );

  // Apre la modale e passa il gioco selezionato
  const openModal = (game) => {
    setModalGame(game);
  };

  // Chiude la modale
  const closeModal = () => {
    setModalGame(null);
  };

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
                onClick={() => openModal(game)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}

          {/* Se il gioco viene selezionato apro la modale */}
          {modalGame && (
            <Modal
              title={modalGame.title}
              id={modalGame.id}
              onClose={closeModal}
            />
          )}
        </div>
      </section>
    </>
  );
}
