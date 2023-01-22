import { Outlet, NavLink } from "react-router-dom";

import { useState } from "react";

import { FaSearch } from "react-icons/fa";

function Navbar() {
  // Init state
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Toggle open nav menu
  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleScroll() {
    if (window.scrollY >= 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav className={isScrolling ? "is-scrolling" : ""}>
        <NavLink to="/" className="nav-link" id="logo">
          EMDB
        </NavLink>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
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

        <div className="nav-right">
          <form>
            <FaSearch id="search-icon" size={25} />
            <input id="nav-search" typeof="submit" />
          </form>

          <div
            onClick={handleClick}
            className={`hamburger ${isOpen ? "active" : ""}`}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
