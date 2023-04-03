import { Link, NavLink, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
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
        </div>
      </nav>

      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
