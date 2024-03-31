// movieController.js

const Movie = require('../models/movie');

// Implement CRUD operations for movies similar to genreController.js
// Get all movies
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};



// Create a new movie
const createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};




module.exports = {
    getAllMovies,
    createMovie,
  };