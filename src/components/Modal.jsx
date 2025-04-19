// Importo il context per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

export default function Modal({ title, id, onClose }) {
  //! Context
  // Prendo la funzione dal context
  const { removeFromFavorites } = consumerGames();

  //! Funzioni
  // Rimuove il gioco dai preferiti e chiude la modale
  const confirmDelete = () => {
    removeFromFavorites(id);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Sei sicuro di voler eliminare questo videogioco dai preferiti ?</p>
        <h2>{title}</h2>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={confirmDelete}>
            Conferma
          </button>
          <button className="cancel-button" onClick={onClose}>
            Annulla
          </button>
        </div>
      </div>
    </div>
  );
}
