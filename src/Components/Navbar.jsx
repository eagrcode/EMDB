import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/" className="nav-link" id="logo">
            EMDB
          </NavLink>
          <NavLink to="/" className="nav-link">
            HOME
          </NavLink>
          <NavLink to="/movies" className="nav-link">
            MOVIES
          </NavLink>
          <NavLink to="/series" className="nav-link">
            SERIES
          </NavLink>
          <NavLink to="/new&popular" className="nav-link">
            NEW & POPULAR
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
