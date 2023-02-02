import { useQueryResults } from "../../hooks/getSearch";

import "../ResultsPage/resultsPage.css";

// configs
import { imageURL, posterSizes } from "../../configs/tmdbConfig";

import { MovieCard } from "../../Components";

function ResultsPage({ query }) {
  // fetch query results
  const { data: queryResults, isLoading, isError } = useQueryResults(query);

  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  return (
    <>
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
    </>
  );
}

export default ResultsPage;
