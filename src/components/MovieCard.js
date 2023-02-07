import React from "react";
import "./MovieCard.css";

function MovieDetails(props) {
  return (
    <div className="movie-card">
      <img
        src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
        alt={props.movie.title + " poster"}
      />
      <div className="movie-card-title">{props.movie.title}</div>
    </div>
  );
}

export default MovieDetails;
