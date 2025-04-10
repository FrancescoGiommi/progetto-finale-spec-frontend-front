import { useState } from "react";
import { Link } from "react-router-dom";

// Importo il contesto per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

// Import la card dei giochi
import CardGame from "../components/cardGame";

export default function GamesListPage() {
  // Uso il contesto per ottenere la lista dei giochi
  const { gamesList } = consumerGames();

  // Stato per la barra di ricerca
  const [searchGame, setSearchGame] = useState("");

  // Stato per la categoria
  const [category, setCategory] = useState("");

  // Stato per mostrare/nascondere la barra di ricerca
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  // Funzione per filtrare per titolo
  const filterByTitle = () => {
    return gamesList.filter((game) =>
      game.title.toLowerCase().includes(searchGame.toLowerCase())
    );
  };

  // Funzione per filtrare per categoria
  const filterByCategory = () => {
    return gamesList.filter(
      (game) => game.category.toLowerCase() === category.toLowerCase()
    );
  };

  // Variabile per filtrare i giochi in base alla ricerca
  let gamesFilterByTitleOrCategory = gamesList;

  // Se è stato cercato un titolo, filtra per titolo
  if (searchGame.trim() !== "") {
    gamesFilterByTitleOrCategory = filterByTitle();
    // Se è stata selezionata una categoria, filtra per categoria
  } else if (category.trim() !== "") {
    gamesFilterByTitleOrCategory = filterByCategory();
  }

  return (
    <>
      <h1>Lista videogiochi</h1>
      {/* Bottone per mostrare/nascondere la barra di ricerca */}
      <button onClick={() => setShowSearchMenu(!showSearchMenu)}>
        {showSearchMenu ? "Nascondi ricerca" : "Cerca un gioco"}
      </button>
      {showSearchMenu && (
        <div className="search-bar">
          {/* Barra di ricerca per titolo */}
          <input
            type="text"
            value={searchGame}
            onChange={(e) => setSearchGame(e.target.value)}
            placeholder="Cerca un gioco..."
          />
          {/* Filtra gioco per categoria */}
          <h2>Filtra per categoria</h2>
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Tutte le categorie</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Thriller">Thriller</option>
              <option value="RPG">RPG</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Action-Adventure">Action-Adventure</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Fighting">Fighting</option>
              <option value="Hack and Slash">Hack and Slash</option>
              <option value="Soulslike">Soulslike</option>
              <option value="Indie RPG">Indie RPG</option>
            </select>
          </div>
        </div>
      )}
      <div>
        <div className="games-list">
          {/* Se la lista dei giochi non è ancora stata caricata*/}
          {gamesList.length === 0 ? (
            <p>Caricamento in corso...</p>
          ) : // Se i giochi sono caricati ma nessuno corrisponde ai filtri
          gamesFilterByTitleOrCategory.length === 0 ? (
            <p>Nessun gioco trovato.</p>
          ) : (
            // Altrimenti mostro la lista filtrata dei giochi
            gamesFilterByTitleOrCategory.map((game) => (
              <Link
                className="link"
                to={`/gamesDetails/${game.id}`}
                key={game.id}
              >
                <CardGame game={game} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}
