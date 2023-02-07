import React from "react";
import "./MovieCardDetails.css";
import { useLocation } from "react-router-dom";


function MovieCardDetails(props) {  
  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie);
  return (
    <div className="movie-card-details">
      <h1>Movie Details</h1>
        <div className="movie-card-details-poster">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title + " poster"}
          />
        </div>
        <div className="movie-card-details-info">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieCardDetails;