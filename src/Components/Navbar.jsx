import { Outlet, NavLink } from "react-router-dom";

import { useState } from "react";

import { Search } from "../Components";

function Navbar() {
  // Init state
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [query, setQuery] = useState("");

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
          <ul className="nav-list">
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
          <Search />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
