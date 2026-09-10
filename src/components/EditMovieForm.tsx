import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types';

interface MovieFormData {
  title: string
  genre: string
  rating: string
  image: string
  description: string
}

interface EditMovieFormProps {
  editMovie: Movie | null
  onEditMovie: (id: string, updatedData: Partial<Movie>) => void
}

function EditMovieForm({ editMovie, onEditMovie }: EditMovieFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<MovieFormData>({
    title: editMovie?.title || '',
    genre: editMovie?.genre || '',
    rating: editMovie?.rating.toString() || '',
    image: editMovie?.image || '',
    description: editMovie?.description || ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!editMovie) {
    return <p>No movie selected to edit. Go back and click Edit on a movie card.</p>;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const movieToSubmit = { ...formData, rating: Number(formData.rating) };
    onEditMovie(editMovie!.id, movieToSubmit);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <p>Movie updated!</p>
        <button onClick={() => navigate('/movies')}>Back to All Movies</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Movie</h2>
      <input type='text' name='title' value={formData.title} onChange={handleChange} />
      <input type='text' name='genre' value={formData.genre} onChange={handleChange} />
      <input type='text' name='rating' value={formData.rating} onChange={handleChange} />
      <input type='text' name='image' value={formData.image} onChange={handleChange} />
      <textarea name='description' value={formData.description} onChange={handleChange} />
      <button type='submit'>Submit Edit</button>
    </form>
  );
}
export default EditMovieForm;