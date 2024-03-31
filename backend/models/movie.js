const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    actors: [{
        type: String
    }],
    releaseDate: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    description: String,
    runtime: {
        type: Number,
        min: 0 // in minutes
    },
    imageUrl: String
});

module.exports = mongoose.model('Movie', movieSchema);
