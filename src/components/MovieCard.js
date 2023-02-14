import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieDetails(props) {

  const movie = props
  const movielink = "/" + movie.movie.id
  return (
    <div className="movie-card">
      <Link to={movielink} state={movie}>
      <img
        src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
        alt={props.movie.title + " poster"}
        title={props.movie.title}
      />
      </Link>
    </div>
  );
}

export default MovieDetails;
