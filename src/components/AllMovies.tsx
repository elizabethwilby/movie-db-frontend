import MovieList from './MovieList';
import { Movie } from '../types'

interface AllMoviesProps {
  movies: Movie[]
  onDeleteMovie: (id: string) => void
  startEdit: (movie: Movie) => void
}

function AllMovies({ movies, onDeleteMovie, startEdit }: AllMoviesProps) {
  return (
    <MovieList
      movies={movies}
      onDeleteMovie={onDeleteMovie}
      startEdit={startEdit}
    />
  );
}

export default AllMovies;