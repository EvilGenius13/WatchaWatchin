import React from "react";
import "./MovieActorCard.css";
import { Link } from "react-router-dom";

function MovieActorCard(props) {
  const actor = props.actor;
  const actorlink = "/" + actor.id
  
  if (actor.profile_path === null) {
    return (
      <div className="actor-card">
        <h3>Character: {actor.character}</h3>
        <Link to={actorlink} state={actor}>
          <img src={"https://i.pinimg.com/originals/95/8d/7e/958d7e0958ecb6a45d7c61e416c9c8be.jpg"} alt={actor.name + " poster"} />
        </Link>
        <h3>{actor.name}</h3>
      </div>
    );
  }
  return (
    <div className="actor-card">
      <h3>Character: {actor.character}</h3>
      <Link to={actorlink} state={actor}>
        <img src={"https://image.tmdb.org/t/p/w500" + actor.profile_path} alt={actor.name + " poster"} />
      </Link>
      <h3>{actor.name}</h3>
    </div>
  );
}

export default MovieActorCard;