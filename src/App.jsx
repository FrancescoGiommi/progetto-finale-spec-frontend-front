import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Componenti */
import Navbar from "./components/Navbar";

/* Pagine */
import VideogamesListPage from "./pages/videogamesListPage";

import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            {/* Lista VideoGames */}
            <Route element={<VideogamesListPage />} path="/" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
