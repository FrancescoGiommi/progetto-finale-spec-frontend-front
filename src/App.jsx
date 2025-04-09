import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Componenti */
import Navbar from "./components/Navbar";

/* Pagine */
import GamesListPage from "./pages/gamesListPage";

/* Contesto Globale */
import { GamesProvider } from "./globalContext/GamesContext";

import { useState } from "react";

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
            </Routes>
          </div>
        </BrowserRouter>
      </GamesProvider>
    </>
  );
}

export default App;
