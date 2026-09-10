import { useState } from 'react';
import { Movie } from '../types';

interface MovieFormData {
  title: string
  genre: string
  rating: string
  image: string
  description: string
}

interface AddMovieFormProps {
  onAddMovie: (movie: Movie) => void
  movies: Movie[]
}

function AddMovieForm({ onAddMovie, movies }: AddMovieFormProps) {
  const [formData, setFormData] = useState<MovieFormData>({
    title: '',
    genre: '',
    rating: '',
    image: '',
    description: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const movieExists = movies.some(
      (movie) =>
        movie.title.trim().toLowerCase() ===
        formData.title.trim().toLowerCase()
    );

    if (movieExists) {
      alert("This movie already exists in the database!");
      return;
    }

    const movieToSubmit = {
      ...formData,
      rating: Number(formData.rating)
    };

    fetch(`${process.env.REACT_APP_API_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieToSubmit)
    })
      .then((res) => res.json())
      .then((newMovie) => {
        alert('Successful!!');
        onAddMovie(newMovie);

        setFormData({
          title: '',
          genre: '',
          rating: '',
          image: '',
          description: ''
        });
      })
      .catch(error => {
        console.error('add failed', error)
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Movie</h2>

      <input type='text' name='title' placeholder='Title' value={formData.title} onChange={handleChange} />
      <input type='text' name='genre' placeholder='Genre' value={formData.genre} onChange={handleChange} />
      <input type='text' name='rating' placeholder='Rate 1-5' value={formData.rating} onChange={handleChange} />
      <input type='text' name='image' placeholder='Poster URL' value={formData.image} onChange={handleChange} />
      <textarea name='description' placeholder='Description' value={formData.description} onChange={handleChange} />

      <button type='submit'>Add Movie</button>
    </form>
  );
}

export default AddMovieForm;