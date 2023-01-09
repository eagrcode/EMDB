// Library imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Page imports
import { Home, Movies, Series, NewAndPopular } from "./Pages";

// Component imports
import { Navbar } from "./Components";

// Stylesheet imports
import "./App.css";

// Init QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="new&popular" element={<NewAndPopular />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
