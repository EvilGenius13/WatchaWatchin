import React, {useState, useEffect} from "react";
import "./ActorList.css";
import MovieActorCard from "./MovieActorCard";
const API_KEY = "a4b966099e2034324cedd25a4719cd2e";
const API_URL = "https://api.themoviedb.org/3/person/popular?api_key=" + API_KEY + "&language=en-US&page=1";

function MovieList() {
const [actors, setActors] = useState([]);
const [query, setQuery] = useState("");

useEffect(() => {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      setActors(data.results);
    });
}, []);
  const list = actors.map(actor => (
    <MovieActorCard key={actor.id} actor={actor} />
  ));
  function searchClick() {
    fetch("https://api.themoviedb.org/3/search/person?api_key=" + API_KEY + "&query=" + query)
      .then(res => res.json())
      .then(data => {
        setActors(data.results);
      });
  }
  if (actors === null) {
    return <div>Loading</div>
  } else {
    return (
    <div className="body">
      <input type="text" placeholder="Search for an actor" 
        onChange={e => setQuery(e.target.value)} value={query}
        />
      <div className="search-button">
        <button style={{cursor:"pointer"}} onClick={searchClick}>Search</button>
      </div>
    <div className="actor-list">
      {list}
    </div>
    </div>
  );
  }
}

export default MovieList;