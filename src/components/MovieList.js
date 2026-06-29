import { useState } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './Search';

function MovieList({ movies, deleteMovie }) {
  const [search, setSearch] = useState('');
  const [sortMovies, setSortMovies] = useState(false);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const displayedMovies = sortMovies
    ? [...filteredMovies].sort((a, b) => a.title.localeCompare(b.title))
    : filteredMovies;

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />

      <button onClick={() => setSortMovies(!sortMovies)}>
        Sort A-Z
      </button>

      {displayedMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;