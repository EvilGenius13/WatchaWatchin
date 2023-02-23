import React from "react";
import "./MovieCardDetails.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import YoutubeEmbed from "./YouTube";
import MovieActorCard from "./MovieActorCard";

function MovieCardDetails(props) {  
  const location = useLocation();
  const movie = location.state.movie;
  const movie_id = location.state.movie.id;
  const API_KEY = "a4b966099e2034324cedd25a4719cd2e"
  const API_URL = "https://api.themoviedb.org/3/movie/" + movie_id + "/videos?api_key=" + API_KEY;
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const API_CAST = "https://api.themoviedb.org/3/movie/" + movie_id + "/credits?api_key=" + API_KEY;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const official_trailers = data.results.filter(trailer => trailer.type === "Trailer");
        const first_trailer = official_trailers[0];
        const trailer_key = first_trailer.key;
        setMovieTrailer(trailer_key);
      });
  }, [API_URL]);

  useEffect(() => {
    fetch(API_CAST)
      .then((res) => res.json())
      .then((data) => {
        const sliceCast = data.cast.slice(0, 10)
        setMovieCast(sliceCast);
      });
  }, [API_CAST]);
  const list = movieCast.map(actor => (
    <MovieActorCard key={actor.id} actor={actor} />
  ));
  if (!movie.poster_path) {
    return (
      <div className="container">
        <div className="details-poster">
          <img src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blank-poster-template-a40a8cc08c073620d3c85098f8f78796_screen.jpg?ts=1636968323"} alt={movie.title + " poster"} />
        </div>
        <div className="details-movie">
            <h1>{movie.title}</h1>
            <p className="over">{movie.overview}</p>
            <h2>Release Date:</h2>
            <p>{movie.release_date}</p>
            <h2>Rating: </h2>
            <p>{movie.vote_average}</p>
              <div className="details-trailer">
                <YoutubeEmbed embedId={movieTrailer} />
              </div>
        </div>
        <div className="details-actor">
           {list}
        </div>
      </div>
      
    );
  }
  return (
    <div className="container">
      <div className="details-poster">
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title + " poster"} />
      </div>
      <div className="details-movie">
          <h1>{movie.title}</h1>
          <p className="over">{movie.overview}</p>
          <h2>Release Date:</h2>
          <p>{movie.release_date}</p>
          <h2>Rating: </h2>
          <p>{movie.vote_average}</p>
            <div className="details-trailer">
              <YoutubeEmbed embedId={movieTrailer} />
            </div>
      </div>
      <div className="details-actor">
         {list}
      </div>
    </div>
    
  );
}

export default MovieCardDetails;
