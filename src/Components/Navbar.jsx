import { Outlet, NavLink } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/" className="nav-link" id="logo">
            EMDB
          </NavLink>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
          <NavLink to="/series" className="nav-link">
            Series
          </NavLink>
        </ul>

        <div className="nav-right">
          <FaSearch size={25} />
          <input id="nav-search" typeof="submit" />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
