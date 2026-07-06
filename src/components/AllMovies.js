import MovieList from './MovieList';

function AllMovies({ movies, onDeleteMovie, startEdit }) {
  return (
    <MovieList
      movies={movies}
      onDeleteMovie={onDeleteMovie}
      startEdit={startEdit}
    />
  );
}

export default AllMovies;