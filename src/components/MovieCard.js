import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieDetails(props) {

  const movie = props
  const movielink = "/movie/" + movie.movie.id
  if (!props.movie.poster_path) {
    return (
      <div className="movie-card">
        <Link to={movielink} state={movie}>
        <img
          src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blank-poster-template-a40a8cc08c073620d3c85098f8f78796_screen.jpg?ts=1636968323"}
          alt={props.movie.title + " poster"}
          title={props.movie.title}
        />
        </Link>
      </div>
    );
  }
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
