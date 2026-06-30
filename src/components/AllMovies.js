import MovieList from "./MovieList";

function AllMovies({ movies, deleteMovie }) {
  return (
    <div>
      <MovieList
        movies={movies}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default AllMovies;