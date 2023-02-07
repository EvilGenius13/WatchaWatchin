import React, {useState, useEffect} from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
const API_KEY = "a4b966099e2034324cedd25a4719cd2e";
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=en-US&page=1";

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

// return (
//   <div className="movie-list">
//     <h1>Popular Movies</h1>
//     <div className="movie-list-container">
//       {movies.map(movie => (
//         <div className="movie-list-item" key={movie.id}>
//           <img
//             src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
//             alt={movie.title + " poster"}
//           />
//           <div className="movie-list-item-title">{movie.title}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// );
}

export default MovieList;