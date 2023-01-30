import { Outlet, NavLink } from "react-router-dom";

import { useState, useEffect } from "react";

// configs
import { imageURL, posterSizes } from "../configs/tmdbConfig";

import { FaSearch } from "react-icons/fa";

import { useQueryResults } from "../hooks/getSearch";
import { MovieCard } from "../Components";

function Navbar() {
  // Init state
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [query, setQuery] = useState("");

  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  // fetch query results
  const { data: queryResults, isLoading, isError } = useQueryResults(query);

  // Toggle open nav menu
  function handleClick() {
    setIsOpen(!isOpen);
  }

  // Set Nav bg color on scroll
  function handleScroll() {
    if (window.scrollY >= 1) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }
  window.addEventListener("scroll", handleScroll);

  function updateQueryValue(e) {
    setQuery(e.target.value);
  }

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  // Mobile component
  return (
    <>
      <nav className={isScrolling ? "is-scrolling" : ""}>
        <div className={`top-nav-mob ${isOpen ? "active" : ""}`}>
          <NavLink to="/" className="nav-link" id="logo">
            EMDB
          </NavLink>

          <div onClick={handleClick} className={`hamburger ${isOpen ? "active" : ""}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li className="nav-item" onClick={handleClick}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <NavLink to="/series" className="nav-link">
                Series
              </NavLink>
            </li>
          </ul>
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
                {queryResults.map((item) => (
                  <li>{item.title || item.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
