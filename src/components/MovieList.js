import React, {useState, useEffect} from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
const API_KEY = "a4b966099e2034324cedd25a4719cd2e";
const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&region=US&with_release_type=3|2";

function MovieList() {
const [movies, setMovies] = useState([]);
const [query, setQuery] = useState("");

useEffect(() => {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results);
    });
}, []);
  const list = movies.map(movie => (
    <MovieCard key={movie.id} movie={movie} />
  ));
  return (
    <div className="body">
    <div className="movie-list">
      { list }
    </div>
    </div>
  );

}

export default MovieList;