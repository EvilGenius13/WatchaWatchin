import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieDetails(props) {
  // props is passing full movie information
  //console.log(props.movie.title);
  
  //Movie is now holding props to pass to MovieCard
  const movie = props
  const movielink = "/" + movie.movie.id
  //console.log(movie.movie.title);
  return (
    <div className="movie-card">
      <Link to={movielink} state={movie}>
      <img
        src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
        alt={props.movie.title + " poster"}
      />
      </Link>
    </div>
  );
}

export default MovieDetails;
