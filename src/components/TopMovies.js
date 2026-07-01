import MovieList from './MovieList';

function TopMovies({ movies, onDeleteMovie }) {
  const topMovies = movies.filter(
    (movie) => movie.rating === 5 
  );

  return (
    <MovieList
      movies={topMovies}
      onDeleteMovie={onDeleteMovie}
    />
  );
}

export default TopMovies;