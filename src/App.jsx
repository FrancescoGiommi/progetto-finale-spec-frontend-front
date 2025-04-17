/* importo il BrowserRouter e le Rotte per la navigazione */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Componenti */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pagine */
import GamesListPage from "./pages/gamesListPage";
import GamesDetailsPage from "./pages/gamesDetailsPage";
import GamesComparatorPage from "./pages/gamesComparatorPage";
import GamesFavoritesPage from "./pages/gamesFavoritesPage";

/* Contesto Globale */
import { GamesProvider } from "./globalContext/GamesContext";

function App() {
  return (
    <>
      <GamesProvider>
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <main>
            <div className="container">
              <Routes>
                {/* Lista dei giochi */}
                <Route element={<GamesListPage />} path="/" />
                {/* Pagina di dettaglio del gioco */}
                <Route
                  element={<GamesDetailsPage />}
                  path="/gamesDetails/:id"
                />
                {/* Pagina per confrontare i giochi */}
                <Route element={<GamesComparatorPage />} path="/comparator" />
                {/* Pagina dei preferiti */}
                <Route element={<GamesFavoritesPage />} path="/favorites" />
              </Routes>
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </GamesProvider>
    </>
  );
}

export default App;
