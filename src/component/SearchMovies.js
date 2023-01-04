import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const api_key = "7d3109957c00c9b55cbbf07af60b8226";

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=en-US&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const MovieCards = movies
    .filter((movie) => movie.poster_path)
    .map((movie) => <MovieCard movie={movie} />);

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name:
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e GodZilla"
          value={query}
          onChange={handleChange}
        />
        <button className="button">Search</button>
      </form>
      <div className="card-list">{MovieCards}</div>
    </>
  );
}
