import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideogamesListPage from "./pages/videogamesListPage";

import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Lista VideoGames */}
          <Route element={<VideogamesListPage />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
