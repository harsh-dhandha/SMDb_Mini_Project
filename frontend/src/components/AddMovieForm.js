import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddMovieForm = () => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [director, setDirector] = useState('');
    const [actors, setActors] = useState(['']); // Initialize with one empty input field for actors
    const [releaseDate, setReleaseDate] = useState('');
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const [runtime, setRuntime] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleActorNameChange = (index, value) => {
        const newActors = [...actors];
        newActors[index] = value;
        setActors(newActors);
    };

    const handleAddActor = () => {
        setActors([...actors, '']);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        // Make a POST request to add a new movie
        axios.post('http://localhost:5000/api/movies', {
            title,
            genre,
            director,
            actors,
            releaseDate,
            rating,
            description,
            runtime,
            imageUrl
        })
            .then(response => {
                console.log('Movie added:', response.data);
                // Clear the form fields
                setTitle('');
                setGenre('');
                setDirector('');
                setActors(['']); // Reset actors to one empty input field
                setReleaseDate('');
                setRating(0);
                setDescription('');
                setRuntime(0);
                setImageUrl('');
                setLoading(false);
            })
            .catch(error => {
                console.error('Error adding movie:', error);
                setLoading(false);
            });
    };

    return (
        <div style={styles.container}>
            <Link to="/" style={styles.navLink} className="nav-link">Home</Link>
            <h2 style={styles.heading}>Add Movie</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Title:</label>
                    <input type="text" style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Genre:</label>
                    <input type="text" style={styles.input} value={genre} onChange={(e) => setGenre(e.target.value)} required />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Director:</label>
                    <input type="text" style={styles.input} value={director} onChange={(e) => setDirector(e.target.value)} required />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Actors:</label>
                    {actors.map((actor, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder="Enter actor name"
                            value={actor}
                            onChange={(e) => handleActorNameChange(index, e.target.value)}
                            style={styles.input} // Added style
                        />
                    ))}
                    <button type="button" onClick={handleAddActor} style={styles.button}>Add Another Actor</button> {/* Added style */}
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Release Date:</label>
                    <input type="date" style={styles.input} value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Rating:</label>
                    <input type="number" style={styles.input} value={rating} onChange={(e) => setRating(e.target.value)} min="0" max="10" />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Description:</label>
                    <textarea style={styles.input} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Runtime (minutes):</label>
                    <input type="number" style={styles.input} value={runtime} onChange={(e) => setRuntime(e.target.value)} min="0" />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Image URL:</label>
                    <input type="text" style={styles.input} value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <button type="submit" style={styles.button} disabled={loading}>Add Movie</button>
            </form>
        </div>
    );
};

// CSS Styles
const styles = {
    
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
    },
    heading: {
        color: '#e41f1f',
        fontFamily: 'Comic Sans MS, cursive',
        fontSize: '32px', // Increased font size for a funky look
        marginBottom: '20px',
        textAlign: 'center', // Centered heading text
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formGroup: {
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        fontSize: '18px',
        color: '#666', // Changed label color for a funky look
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        marginBottom: '10px',
        backgroundColor: '#fff', // Added background color to input fields
    },
    button: {
        backgroundColor: '#e41f1f',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '18px',
        transition: 'background-color 0.3s ease',
        width: '100%', // Made button width 100% for a funky look
    },
    navLink: {
        color: '#007bff', // Blue color
        textDecoration: 'none', // Remove default underline
        fontWeight: 'bold', // Make text bold
    },
    navLinkHover: {
        color: '#0056b3', // Darker blue color on hover
    },
};

export default AddMovieForm;
