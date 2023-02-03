import { useQueryResults } from "../hooks/getSearch";

// configs
import { imageURL, posterSizes } from "../configs/tmdbConfig";

import { MovieCard } from "../Components";

function Search({ updateQueryValue, query, isOpen, setQuery }) {
  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  // fetch query results
  const { data: queryResults, isLoading, isError } = useQueryResults(query);

  // function clearInputOnBlur() {
  //   setQuery("");
  // }

  // // update query value
  // function updateQueryValue(e) {
  //   setQuery(e.target.value);
  // }

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
        onChange={(e) => updateQueryValue(e.target.value)}
        // onBlur={clearInputOnBlur}
        value={query}
        id="search-input"
        type="search"
        placeholder="Search..."
        autoComplete="off"
      />
    </div>
  );
}

export default Search;
