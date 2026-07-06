import { useState } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './Search';

function MovieList({ movies, onDeleteMovie, startEdit }) {
  const [search, setSearch] = useState('');
  const [sortMovies, setSortMovies] = useState(false);

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(search.toLowerCase()) ||
    movie.genre.toLowerCase().includes(search.toLowerCase())
  );

  const displayedMovies = sortMovies
    ? [...filteredMovies].sort((a, b) => a.title.localeCompare(b.title))
    : filteredMovies;

  return (
    <div>
      <div className="search-row">
        <SearchBar search={search} setSearch={setSearch} />
        <button onClick={() => setSortMovies(!sortMovies)}>
          Sort A-Z
        </button>
      </div>
      <div className="movie-grid">
        {displayedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDeleteMovie={onDeleteMovie}
            startEdit={startEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;