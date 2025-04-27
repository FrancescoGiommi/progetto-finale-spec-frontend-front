// Importo useState
import { useState } from "react";

// Importo Link
import { Link } from "react-router-dom";

// Importo il context
import { consumerGames } from "../globalContext/GamesContext";

// Importo la card dei giochi
import CardGame from "../components/CardGame";

export default function GamesListPage() {
  //! Context
  // Prendo la lista dei giochi e le funzioni per gestire i preferiti dal context
  const { gamesList, addToFavorites, isFavorite } = consumerGames();

  //! Stati
  // SearchBar per cercare i giochi
  const [searchGame, setSearchGame] = useState("");

  // Select per selezionare la categoria
  const [category, setCategory] = useState("");

  // Mostro/nascondo la barra di ricerca e la select della categoria
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  // Ordinamento alfabetico dei giochi
  const [sortOrder, setSortOrder] = useState("asc");

  // Ordinamento per titolo o categoria
  const [sortByTitleOrCategory, setSortByTitleOrCategory] = useState("title");

  //! Funzioni
  // Filtra per titolo
  const filterByTitle = (game) => {
    return game.title.toLowerCase().includes(searchGame.toLowerCase());
  };

  // Filtra per categoria
  const filterByCategory = (game) => {
    return (
      category === "" || game.category.toLowerCase() === category.toLowerCase()
    );
  };

  // Filtra i giochi per titolo e categoria
  const filterByTitleOrCategory = gamesList.filter((game) => {
    return filterByTitle(game) && filterByCategory(game);
  });

  // Ordina i giochi filtrati in ordine alfabetico
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

  // Lista finale dei giochi
  let gamesFiltered = sortGames();

  return (
    <>
      <div className="title-container">
        <h1 className="title-page">Benveuto su GamesCompare</h1>
        <h2> Esplora, Confronta e Scegli i Tuoi Videogiochi Preferiti!</h2>
        <p>
          Scopri la nostra collezione di videogiochi, confrontali tra loro e
          salva i tuoi preferiti in un click.
        </p>
      </div>
      <div className="flex-button-container">
        <h2 className="subtitle-page">Lista videogiochi</h2>

        {/* Bottone per mostrare/nascondere barra di ricerca e select della categoria */}
        <button
          className="search-button"
          onClick={() => setShowSearchMenu(!showSearchMenu)}
        >
          {showSearchMenu ? "Nascondi ricerca" : "Cerca un videogioco"}
        </button>
      </div>

      {showSearchMenu && (
        <div className="search-bar">
          {/* Barra di ricerca per titolo */}
          <input
            type="text"
            value={searchGame}
            onChange={(e) => setSearchGame(e.target.value)}
            placeholder="Cerca un videogioco..."
          />

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
        {/* Bottone per cambiare ordine alfabetico */}
        <button
          className="sort-button"
          onClick={() =>
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
          }
        >
          Ordine: {sortOrder === "asc" ? "A → Z" : "Z → A"}
        </button>

        {/* Bottone per ordinare per titolo o categoria */}
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
                isFavorite={isFavorite(game.id)}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
