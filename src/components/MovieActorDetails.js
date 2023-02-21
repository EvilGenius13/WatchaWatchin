import React from "react";
import "./MovieActorDetails.css";
import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

function MovieActorDetails(props) {
  const API_KEY = "a4b966099e2034324cedd25a4719cd2e";
  const [actorMovies, setActorMovies] = useState([]);
  const location = useLocation();
  const actor = location.state;
  console.log(actor)
  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/person/" + actor.id + "/movie_credits?api_key=" + API_KEY + "&language=en-US")
      .then((response) => response.json())
      .then((data) => {
        setActorMovies(data.cast);
        console.log(data.cast)
      });
  }, []);

  return (
    <div className="actor-container">
      <div className="actor-info">
        <h3>{actor.name}</h3>
        <img src={"https://image.tmdb.org/t/p/w500" + actor.profile_path} alt={actor.name + " poster"} />
      </div>
      <div className="movies-in">
        <h2>Known For:</h2>
        <div className="movie-list-container">
          {actorMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
  </div>
  );
}

export default MovieActorDetails;