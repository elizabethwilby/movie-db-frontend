import MovieList from "./MovieList";

function TopMovies({ movies, deleteMovie }) {
  const topMovies = movies.filter(
    (movie) => movie.rating === 5 || movie.rating === "5"
  );

  return (
    <MovieList
      movies={topMovies}
      deleteMovie={deleteMovie}
    />
  );
}

export default TopMovies;