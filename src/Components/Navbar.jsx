import { Outlet, NavLink } from "react-router-dom";

import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";

function Navbar() {
  // Init state
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [isScrolling, setIsScrolling] = useState(false);

  // Toggle open nav menu
  function handleClick() {
    setIsOpen(!isOpen);
  }

  //Toggle Hamburger display
  useEffect(() => {
    function windowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", windowWidth);

    windowWidth();

    return () => window.removeEventListener("resize", windowWidth);
  }, []);

  useEffect(() => {
    function showHideHamburger() {
      if (windowWidth <= 600) {
        setIsMobile(true);
      } else if (windowWidth > 600) {
        setIsMobile(false);
      }
    }
    showHideHamburger();
  }, [windowWidth]);

  // Set Nav bg color on scroll
  function handleScroll() {
    if (window.scrollY >= 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }
  window.addEventListener("scroll", handleScroll);

  // Mobile component
  if (isMobile === true) {
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
            <form>
              <input id="search-input" type="text" placeholder="Search..." />
            </form>
          </ul>
        </nav>
        <Outlet />
      </>
    );
  }

  // > 600px display
  return (
    <>
      <nav className={isScrolling ? "is-scrolling" : ""}>
        <NavLink to="/" className="nav-link" id="logo">
          EMDB
        </NavLink>
        <ul className="nav-menu">
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
          <form id="nav-search">
            <input id="search-input" type="text" placeholder="Search for a Movie or TV show" />
            <button id="nav-search-btn" type="submit">
              <FaSearch id="search-icon" size={25} />
            </button>
          </form>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
