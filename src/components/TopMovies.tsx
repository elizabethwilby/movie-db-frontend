import MovieList from './MovieList';
import { Movie } from "../types"

interface TopMoviesProps {
  movies: Movie[]
  onDeleteMovie: (id:string) => void
  startEdit: (movie: Movie) => void
}

function TopMovies({ movies, onDeleteMovie, startEdit }: TopMoviesProps) {
  const topMovies = movies.filter(
    (movie) => movie.rating === 5 
  );

  return (
    <MovieList
      movies={topMovies}
      onDeleteMovie={onDeleteMovie}
      startEdit={startEdit}
    />
  );
}

export default TopMovies;