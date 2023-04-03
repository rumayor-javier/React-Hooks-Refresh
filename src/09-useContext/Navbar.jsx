import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid justify-content-start">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={"nav-link"}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className={"nav-link"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className={"nav-link"}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
