import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './m_list.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

    useEffect(() => {
        // Fetch movies data from backend API
        axios.get('https://smdb-mini-project.onrender.com/api/movies')
            .then(response => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                setLoading(false);
            });
    }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

    const handleDescriptionToggle = (id) => {
        setExpandedDescriptionId(expandedDescriptionId === id ? null : id);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-grid">
            {movies.map(movie => (
                <div key={movie._id} className="movie-container">
                    <div className="movie-image">
                        <img src={movie.imageUrl} alt="Movie Poster" />
                    </div>
                    <div className="movie-details">
                        <div><strong>Title:</strong> {movie.title}</div>
                        <div><strong>Genre:</strong> {movie.genre}</div>
                        <div><strong>Director:</strong> {movie.director}</div>
                        <div><strong>Actors:</strong> {movie.actors.join(', ')}</div>
                        <div><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</div>
                        <div><strong>Rating:</strong> {movie.rating}</div>
                        <div>
                            <strong>Description:</strong> {expandedDescriptionId === movie._id ? movie.description : `${movie.description.slice(0, 100)}...`}
                            <button onClick={() => handleDescriptionToggle(movie._id)}>
                                {expandedDescriptionId === movie._id ? 'Show Less' : 'Read More'}
                            </button>
                        </div>
                        <div><strong>Runtime:</strong> {movie.runtime} minutes</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
