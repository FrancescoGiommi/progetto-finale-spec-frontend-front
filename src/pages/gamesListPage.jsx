// Importo useState
import { useState } from "react";
// Importo Link
import { Link } from "react-router-dom";

// Importo il context per i videogiochi
import { consumerGames } from "../globalContext/GamesContext";

// Import la card dei giochi
import CardGame from "../components/cardGame";

export default function GamesListPage() {
  //! Context
  // Prendo la lista dei giochi e le funzioni per gestire i preferiti dal context
  const { gamesList, addToFavorites, favoritesGamesList } = consumerGames();

  //! Stati
  // SearchBar per cercare i giochi
  const [searchGame, setSearchGame] = useState("");

  // Select per selezionare la categoria
  const [category, setCategory] = useState("");

  // Mostro/nascondo la barra di ricerca
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  // Ordinamento alfabetico dei giochi
  const [sortOrder, setSortOrder] = useState("asc");

  // Ordinamento per titolo o categoria
  const [sortByTitleOrCategory, setSortByTitleOrCategory] = useState("title");

  //! Funzioni
  // Funzione per filtrare i giochi in base al titolo
  const filterByTitle = (game) => {
    return game.title.toLowerCase().includes(searchGame.toLowerCase());
  };

  // Funzione per filtrare i giochi in base alla categoria
  const filterByCategory = (game) => {
    return (
      category === "" || game.category.toLowerCase() === category.toLowerCase()
    );
  };

  // Funzione per filtrare i giochi sia per titolo che per categoria
  const filterByTitleOrCategory = gamesList.filter((game) => {
    return filterByTitle(game) && filterByCategory(game);
  });

  // Funzione per ordinare i giochi filtrati in ordine alfabetico, in base al titolo o categoria
  const sortGames = () => {
    return filterByTitleOrCategory.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortByTitleOrCategory].localeCompare(b[sortByTitleOrCategory]);
      } else if (sortOrder === "desc") {
        return b[sortByTitleOrCategory].localeCompare(a[sortByTitleOrCategory]);
      }
      return 0;
    });
  };

  // Lista finale dei giochi da mostrare, dopo filtraggio e ordinamento
  let gamesFiltered = sortGames();

  return (
    <>
      <div className="flex-button-container">
        <h1>Lista videogiochi</h1>

        {/* Bottone per mostrare/nascondere la barra di ricerca e la select della categoria */}
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
        {/* Bottone per cambiare l'ordine alfabetico dei giochi (A → Z o Z → A) */}
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
          {/* Lista dei giochi filtrati e ordinati */}
          {gamesFiltered.map((game) => (
            <Link
              className="link"
              to={`/gamesDetails/${game.id}`}
              key={game.id}
            >
              {/* Card del gioco */}
              <CardGame
                id={game.id}
                title={game.title}
                image={game.image}
                category={game.category}
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
