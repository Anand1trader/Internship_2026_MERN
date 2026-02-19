import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const OmdbSearch = () => {

  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useState("Iron Man");

  const navigate = useNavigate();

  const searchMovie = async () => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=9d57be0b&s=${searchParam}`
      );

      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
      }

    } catch (error) {
      console.log(error);
      alert("Error while fetching movies");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>OMDB SEARCH</h1>

      <input
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />

      <button onClick={searchMovie}>
        SEARCH
      </button>

      <br /><br />

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>IMDB ID</th>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>POSTER</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <tr key={movie.imdbID}>
                <td>{movie.imdbID}</td>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{ height: "120px", width: "120px" }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/movie/${movie.imdbID}`)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Movies Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
