
// Importing the Director model
const Director = require('../models/director');
// Implement CRUD operations for directtor similar to genreController.js
// Get all directors
exports.getAllDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.json(directors);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a director by ID
exports.getDirectorById = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        if (!director) {
            return res.status(404).json({ error: 'Director not found' });
        }
        res.json(director);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new director
exports.createDirector = async (req, res) => {
    try {
        const director = new Director(req.body);
        await director.save();
        res.status(201).json(director);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a director by ID
exports.updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!director) {
            return res.status(404).json({ error: 'Director not found' });
        }
        res.json(director);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a director by ID
exports.deleteDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndRemove(req.params.id);
        if (!director) {
            return res.status(404).json({ error: 'Director not found' });
        }
        res.json({ message: 'Director deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};