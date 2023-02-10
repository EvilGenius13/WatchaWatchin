import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieCardDetails from './components/MovieCardDetails';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router basename='/'>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MovieList />} />
        <Route path="/:movieId" element={<MovieCardDetails />} />
      </Route>
    </Routes>
  </Router>
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
