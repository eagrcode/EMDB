function Search({ updateQueryValue, query }) {
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
