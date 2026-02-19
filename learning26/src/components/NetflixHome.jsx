import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const NetflixHome = () => {

  const { imdbID } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=9d57be0b&i=${imdbID}`
        );

        if (res.data.Response === "True") {
          setMovie(res.data);
        } else {
          setMovie(null);
        }

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (imdbID) {
      fetchMovie();
    }

  }, [imdbID]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  if (!movie) return <h2 style={{ textAlign: "center" }}>Movie Not Found</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      
      <button onClick={() => navigate(-1)}>🔙 Back</button>

      <h1>🎬 Netflix Home</h1>
      <h2>{movie.Title}</h2>

      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ height: "250px" }}
      />

      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Director:</b> {movie.Director}</p>
      <p><b>Actors:</b> {movie.Actors}</p>
      <p><b>Language:</b> {movie.Language}</p>
      <p><b>IMDB Rating:</b> ⭐ {movie.imdbRating}</p>
    </div>
  );
};
