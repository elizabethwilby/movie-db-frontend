import { useForm } from 'react-hook-form';
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MovieFormData>();

  function onSubmit(formData: MovieFormData) {
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
        reset();
      })
      .catch(error => {
        console.error('add failed', error)
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Movie</h2>

      <input type='text' placeholder='Title' {...register('title', { required: 'Title is required' })} />
      {errors.title && <span className='error'>{errors.title.message}</span>}

      <input type='text' placeholder='Genre' {...register('genre', { required: 'Genre is required' })} />
      {errors.genre && <span className='error'>{errors.genre.message}</span>}

      <input type='text' placeholder='Rate 1-5' {...register('rating', {
        required: 'Rating is required',
        pattern: { value: /^[1-5]$/, message: 'Rating must be a number from 1 to 5' }
      })} />
      {errors.rating && <span className='error'>{errors.rating.message}</span>}

      <input type='text' placeholder='Poster URL' {...register('image', { required: 'Image URL is required' })} />
      {errors.image && <span className='error'>{errors.image.message}</span>}

      <textarea placeholder='Description' {...register('description', { required: 'Description is required' })} />
      {errors.description && <span className='error'>{errors.description.message}</span>}

      <button type='submit'>Add Movie</button>
    </form>
  );
}

export default AddMovieForm;