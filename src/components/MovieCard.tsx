import { useNavigate } from 'react-router-dom';
import { Movie } from "../types"

interface MovieCardProps {
  movie: Movie
  onDeleteMovie: (id: string) => void
  startEdit: (movie: Movie) => void
}

function MovieCard({ movie, onDeleteMovie, startEdit }: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <div className='movie-card'>
      <h2>{movie.title}</h2>
      <div className='poster-flip'>
        <div className='poster-inner'>
          <div className='poster-front'>
            <img src={movie.image} alt={`${movie.title} poster`} />
          </div>
          <div className='poster-back'>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
      <p>Rating: {movie.rating}/5</p>
      <p>Genre: {movie.genre}</p>
      <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
      <button onClick={() => { startEdit(movie); navigate('/edit-movie'); }}>Edit Movie</button>
    </div>
  );
}

export default MovieCard;