import React from "react";
import "./MovieCardDetails.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import YoutubeEmbed from "./YouTube";


function MovieCardDetails(props) {  
  const location = useLocation();
  const movie = location.state.movie;
  const movie_id = location.state.movie.id;
  const API_KEY = "a4b966099e2034324cedd25a4719cd2e"
  const API_URL = "http://api.themoviedb.org/3/movie/" + movie_id + "/videos?api_key=" + API_KEY;
  const [movieTrailer, setMovieTrailer] = useState([]);
  const background = "https://image.tmdb.org/t/p/original" + movie.backdrop_path
  console.log(movie)
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const trailer_key = data.results[0].key;
        setMovieTrailer(trailer_key);
      });
  }, []);

  return (
    <div className="container"
      style={{ backgroundImage: `url(${background})` }}>
      <div className="details-poster">
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title + " poster"} />
      </div>
      <div className="details-movie">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
      <div className="details-trailer">
        {/* <h1>Check out a clip!</h1>
        <YoutubeEmbed embedId={movieTrailer} /> */}
      </div>
    </div>
    
  );
}

export default MovieCardDetails;
