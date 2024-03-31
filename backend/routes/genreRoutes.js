const express = require('express');
const genreController = require('../controllers/genreController');

const router = express.Router();

// Import the genre controller

// Define the routes
router.get('/', genreController.getAllGenres);
router.get('/:id', genreController.getGenreById);
router.post('/', genreController.createGenre);
router.put('/:id', genreController.updateGenre);
router.delete('/:id', genreController.deleteGenre);

module.exports = router;