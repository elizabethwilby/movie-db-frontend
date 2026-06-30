import MovieList from './MovieList';

function AllMovies({ movies, deleteMovie }) {
  return (
    <MovieList
      movies={movies}
      deleteMovie={deleteMovie}
    />
  );
}

export default AllMovies;