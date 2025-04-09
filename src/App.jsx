import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Componenti */
import Navbar from "./components/Navbar";

/* Pagine */
import VideogamesListPage from "./pages/videogamesListPage";

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
              <Route element={<VideogamesListPage />} path="/" />
            </Routes>
          </div>
        </BrowserRouter>
      </GamesProvider>
    </>
  );
}

export default App;
