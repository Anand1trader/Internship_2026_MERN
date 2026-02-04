import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/netflixhome">
                Netflix Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixlatest">
                Latest
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixmylist">
                My List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teams">
                Teams
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
};