// react router
import { Outlet, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <NavLink to="/" className="nav-link" id="logo">
          EMDB
        </NavLink>
      </div>
      <div className="footer-row">
        <nav id="footer-nav">
          <ul>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                })}
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                })}
                to="/movies"
                className="nav-link"
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                })}
                to="/series"
                className="nav-link"
              >
                Series
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                })}
                to="/search"
                className="nav-link"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
