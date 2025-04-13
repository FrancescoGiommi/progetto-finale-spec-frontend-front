import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Componenti */
import Navbar from "./components/Navbar";

/* Pagine */
import GamesListPage from "./pages/gamesListPage";
import GamesDetailsPage from "./pages/gamesDetailsPage";
import GamesComparatorPage from "./pages/gamesComparatorPage";
import GamesFavoritesPage from "./pages/gamesFavoritesPage";

/* Contesto Globale */
import { GamesProvider } from "./globalContext/GamesContext";

import "./App.css";

function App() {
  return (
    <>
      <GamesProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              {/* Lista VideoGames */}
              <Route element={<GamesListPage />} path="/" />
              <Route element={<GamesDetailsPage />} path="/gamesDetails/:id" />
              <Route element={<GamesComparatorPage />} path="/comparator" />
              <Route element={<GamesFavoritesPage />} path="/favorites" />
            </Routes>
          </div>
        </BrowserRouter>
      </GamesProvider>
    </>
  );
}

export default App;
