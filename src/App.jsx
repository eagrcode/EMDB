// Library imports
import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Page imports
import { Home, Movies, Series, Details, DetailsTV, ResultsPage } from "./Pages";

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
  // Init state
  const [query, setQuery] = useState("");

  // Update query value
  function updateQueryValue(e) {
    setQuery(e);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={<Navbar updateQueryValue={updateQueryValue} query={query} setQuery={setQuery} />}
        >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="details/movie/:id" element={<Details type="movie" />} />
          <Route path="details/tv/:id" element={<DetailsTV type="tv" />} />
          <Route path="search" element={<ResultsPage query={query} />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
