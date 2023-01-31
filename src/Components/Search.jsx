import { useQueryResults } from "../hooks/getSearch";

import { useState } from "react";

import ScrollContainer from "react-indiana-drag-scroll";

// configs
import { imageURL, posterSizes } from "../configs/tmdbConfig";

import { MovieCard } from "../Components";

function Search() {
  // Init state
  const [query, setQuery] = useState("");

  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  // fetch query results
  const { data: queryResults, isLoading, isError } = useQueryResults(query);

  // update query value
  function updateQueryValue(e) {
    setQuery(e.target.value);
  }

  // if (isLoading) {
  //   return;
  // }

  // if (isError) {
  //   return (
  //     <div className="search-container">
  //       <input
  //         onChange={updateQueryValue}
  //         value={query}
  //         id="search-input"
  //         type="search"
  //         placeholder="Search..."
  //         autoComplete="off"
  //       />

  //       <ul className="query-dropdown">
  //         <li>No results found</li>
  //       </ul>
  //     </div>
  //   );
  // }

  return (
    <div className="search-container">
      <input
        onChange={updateQueryValue}
        value={query}
        id="search-input"
        type="search"
        placeholder="Search..."
        autoComplete="off"
      />
      {queryResults && (
        <ul className="query-dropdown">
          {queryResults.map(
            (item) =>
              item.vote_count >= 100 && (
                <li className="search-row" key={item.id}>
                  <MovieCard
                    mediaType={item.media_type}
                    key={item.id}
                    id={item.id}
                    title={item.title || item.name}
                    imageURL={imageURL}
                    imageSize={p154}
                    image={item.poster_path}
                  />
                  {item.title || item.name}{" "}
                  {item.release_date && `(${item.release_date.substring(0, 4)})`}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;
