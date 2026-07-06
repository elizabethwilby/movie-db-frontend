import MovieList from './MovieList';

function TopMovies({ movies, onDeleteMovie, startEdit }) {
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