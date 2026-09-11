import { useForm } from 'react-hook-form';
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
  const { register, handleSubmit, formState: { errors } } = useForm<MovieFormData>({
    defaultValues: {
      title: editMovie?.title || '',
      genre: editMovie?.genre || '',
      rating: editMovie?.rating.toString() || '',
      image: editMovie?.image || '',
      description: editMovie?.description || ''
    }
  });

  if (!editMovie) {
    return <p>No movie selected to edit. Go back and click Edit on a movie card.</p>;
  }

  function onSubmit(formData: MovieFormData) {
    const movieToSubmit = { ...formData, rating: Number(formData.rating) };
    onEditMovie(editMovie!.id, movieToSubmit);
    navigate('/movies');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Edit Movie</h2>

      <input type='text' {...register('title', { required: 'Title is required' })} />
      {errors.title && <span className='error'>{errors.title.message}</span>}

      <input type='text' {...register('genre', { required: 'Genre is required' })} />
      {errors.genre && <span className='error'>{errors.genre.message}</span>}

      <input type='text' {...register('rating', {
        required: 'Rating is required',
        pattern: { value: /^[1-5]$/, message: 'Rating must be a number from 1 to 5' }
      })} />
      {errors.rating && <span className='error'>{errors.rating.message}</span>}

      <input type='text' {...register('image', { required: 'Image URL is required' })} />
      {errors.image && <span className='error'>{errors.image.message}</span>}

      <textarea {...register('description', { required: 'Description is required' })} />
      {errors.description && <span className='error'>{errors.description.message}</span>}

      <button type='submit'>Submit Edit</button>
    </form>
  );
}
export default EditMovieForm;