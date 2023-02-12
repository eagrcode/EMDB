// react
import { useState } from "react";

// hooks
import { useQueryResults } from "../../hooks/getSearch";
import { usefetchTrending } from "../../hooks/getTrending";

// css
import "../ResultsPage/results-page.css";

// configs
import { imageURL, posterSizes } from "../../configs/tmdbConfig";

// components
import { MovieCard, Search } from "../../components";

function ResultsPage() {
  // state
  const [query, setQuery] = useState("");

  // fetch data
  const { data: queryResults, loadingQuery, errorQuery } = useQueryResults(query);
  const { data: trending, isLoading, isError } = usefetchTrending();

  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  // Update query value
  function updateQueryValue(e) {
    setQuery(e);
  }

  if (isLoading) {
    return (
      <section className="results-section">
        <Search updateQueryValue={updateQueryValue} query={query} setQuery={setQuery} />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="results-section">
        <Search updateQueryValue={updateQueryValue} query={query} setQuery={setQuery} />
      </section>
    );
  }

  if (!query) {
    return (
      <>
        <section className="results-section">
          <Search updateQueryValue={updateQueryValue} query={query} setQuery={setQuery} />
          <section className="discover-section">
            <h2>Discover</h2>
            <div className="results-grid">
              {trending.map(
                (item) =>
                  item.vote_count >= 100 && (
                    <MovieCard
                      mediaType={item.media_type}
                      key={item.id}
                      id={item.id}
                      title={item.title || item.name}
                      imageURL={imageURL}
                      imageSize={p154}
                      image={item.poster_path}
                    />
                  )
              )}
            </div>
          </section>
        </section>
      </>
    );
  }

  return (
    <section className="results-section">
      <Search updateQueryValue={updateQueryValue} query={query} setQuery={setQuery} />
      <h2 id="results-header">Results</h2>
      {queryResults && (
        <div className="results-grid">
          {queryResults.map(
            (item) =>
              item.vote_count >= 100 && (
                <MovieCard
                  mediaType={item.media_type}
                  key={item.id}
                  id={item.id}
                  title={item.title || item.name}
                  imageURL={imageURL}
                  imageSize={p154}
                  image={item.poster_path}
                />
              )
          )}
        </div>
      )}
    </section>
  );
}

export default ResultsPage;
