import MovieList from './MovieList';

function AllMovies({ movies, onDeleteMovie }) {
  return (
    <MovieList
      movies={movies}
      onDeleteMovie={onDeleteMovie}
    />
  );
}

export default AllMovies;