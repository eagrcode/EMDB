// Library imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Page imports
import { Home, Movies, Series, Details, DetailsTV, ResultsPage } from "./Pages";

// Component imports
import { Navbar, Footer } from "./Components";

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
          <Route path="details/movie/:id" element={<Details type="movie" />} />
          <Route path="details/tv/:id" element={<DetailsTV type="tv" />} />
          <Route path="search" element={<ResultsPage />} />
        </Route>
      </Routes>
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
