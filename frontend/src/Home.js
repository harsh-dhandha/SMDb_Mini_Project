// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import './App.css'; 

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to SMDb </h1>
      <div className="links">
        
        <Link to="/add-movie">Add Movie</Link>
        
      </div>
      <div className="forms">
     
        <MovieList />
      </div>
    </div>
  );
}

export default Home;
