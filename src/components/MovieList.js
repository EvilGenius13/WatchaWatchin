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
  function searchClick() {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=" + query)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }
  return (
    <div className="body">
      <input type="text" placeholder="Search for a movie" 
        onChange={e => setQuery(e.target.value)} value={query}
        />
        <button onClick={searchClick}>Search</button>
    <div className="movie-list">
      { list }
    </div>
    </div>
  );

}

export default MovieList;