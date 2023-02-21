import React from 'react';
import './index.css';
import App from './components/App'
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieCardDetails from './components/MovieCardDetails';
import MovieActorDetails from './components/MovieActorDetails';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router basename='/'>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:movieId" element={<MovieCardDetails />} />
        <Route path="/actor/:actorId" element={<MovieActorDetails />} />
      </Route>
    </Routes>
  </Router>
)


reportWebVitals();
