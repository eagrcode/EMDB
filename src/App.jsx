// React imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Page imports
import { Home, Movies, Series, NewAndPopular } from "./Pages";

// Component imports
import { Navbar } from "./Components";

// Stylesheet imports
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="new&popular" element={<NewAndPopular />} />
      </Route>
    </Routes>
  );
}

export default App;
