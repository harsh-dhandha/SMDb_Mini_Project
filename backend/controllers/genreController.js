// genreController.js

const Genre = require('../models/genre');

const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getGenreById = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        if (genre) {
            res.json(genre);
        } else {
            res.status(404).json({ message: 'Genre not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createGenre = async (req, res) => {
    const genre = new Genre({
        name: req.body.name
    });
    try {
        const newGenre = await genre.save();
        res.status(201).json(newGenre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateGenre = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        if (genre) {
            genre.name = req.body.name || genre.name;
            await genre.save();
            res.json({ message: 'Genre updated' });
        } else {
            res.status(404).json({ message: 'Genre not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteGenre = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        if (genre) {
            await genre.remove();
            res.json({ message: 'Genre deleted' });
        } else {
            res.status(404).json({ message: 'Genre not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
};
