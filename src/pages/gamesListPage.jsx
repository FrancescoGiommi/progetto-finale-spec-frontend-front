import { useState } from "react";
import { Link } from "react-router-dom";

// Importo il contesto per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

// Import la card dei giochi
import CardGame from "../components/cardGame";

export default function GamesListPage() {
  //! Context
  // Uso il contesto per ottenere la lista dei giochi
  const { gamesList, addToFavorites, favoritesGamesList } = consumerGames();

  //! Stati
  // Stato per la barra di ricerca
  const [searchGame, setSearchGame] = useState("");

  // Stato per la categoria
  const [category, setCategory] = useState("");

  // Stato per mostrare/nascondere la barra di ricerca
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortByTitleOrCategory, setSortByTitleOrCategory] = useState("title");

  //! Funzioni
  // Funzione per filtrare i giochi in base a titolo, categoria e ordine alfabetico
  const sortGames = () => {
    // Prima filtro in base a titolo e categoria
    const filteredGamesByTitleOrCategory = gamesList.filter((game) => {
      const filterByTitle = game.title
        .toLowerCase()
        .includes(searchGame.toLowerCase());

      const filterByCategory =
        category === "" ||
        game.category.toLowerCase() === category.toLowerCase();

      return filterByTitle && filterByCategory;
    });

    // Poi ordino il risultato in ordine alfabetico
    return filteredGamesByTitleOrCategory.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortByTitleOrCategory].localeCompare(b[sortByTitleOrCategory]);
      } else if (sortOrder === "desc") {
        return b[sortByTitleOrCategory].localeCompare(a[sortByTitleOrCategory]);
      }
      return 0;
    });
  };

  // Variabile per filtrare i giochi in base alla ricerca
  let gamesFiltered = sortGames();

  return (
    <>
      <div className="flex-button-container">
        <h1>Lista videogiochi</h1>
        {/* Bottone per mostrare/nascondere la barra di ricerca */}
        <button
          className="search-button"
          onClick={() => setShowSearchMenu(!showSearchMenu)}
        >
          {showSearchMenu ? "Nascondi ricerca" : "Cerca un gioco"}
        </button>
      </div>
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
            {/* Select delle categorie */}
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
        {/* Bottone per ordinare i giochi in ordine alfabetico */}
        <button
          className="sort-button"
          onClick={() =>
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
          }
        >
          Ordine: {sortOrder === "asc" ? "A → Z" : "Z → A"}
        </button>

        {/* Bottone per ordinare i giochi per titolo o categoria */}
        <button
          onClick={() =>
            setSortByTitleOrCategory((prev) =>
              prev === "title" ? "category" : "title"
            )
          }
        >
          Ordina per:{" "}
          {sortByTitleOrCategory === "title" ? "Titolo" : "Categoria"}
        </button>

        <div className="games-list">
          {/* Giochi filtrati */}
          {gamesFiltered.map((game) => (
            <Link
              className="link"
              to={`/gamesDetails/${game.id}`}
              key={game.id}
            >
              <CardGame
                game={game}
                addToFavorites={addToFavorites}
                isFavorite={favoritesGamesList.includes(game.id)}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
