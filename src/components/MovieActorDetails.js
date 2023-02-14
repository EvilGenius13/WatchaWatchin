import React from "react";
import "./MovieActorDetails.css";
import { useLocation } from "react-router-dom";

function MovieActorDetails(props) {
  const location = useLocation();
  const actor = location.state.actor;
  console.log(actor)
  return (
    <div>
      <h1>Actor Details</h1>
    </div>
    // <div className="actor-card">
    //   <img src={"https://image.tmdb.org/t/p/w500" + actor.profile_path} alt={actor.name + " poster"} />
    //   <h3>{actor.name}</h3>
    //   <p>Character: {actor.character}</p>
    // </div>
  );
}

export default MovieActorDetails;