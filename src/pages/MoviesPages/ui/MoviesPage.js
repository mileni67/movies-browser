import React, { useEffect, useState } from "react";
import tmdbApi from "../../../shared/api/tmdb";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdbApi
      .get("/movie/popular")
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error loading movies:", error));
  }, []);

  return (
    <div>
      <h1>Popular movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
