import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  function deleteMovie(id) {
  fetch(`http://localhost:3000/movies/${id}`, {
    method: 'DELETE'
  });

  setMovies(movies.filter((movie) => movie.id !== id));
}

  return (
    <div className='App'>
      <h1>Movie Database</h1>

      <MovieList movies={movies} deleteMovie={deleteMovie} />
      <AddMovieForm addMovie={addMovie} />
    </div>
  );
}

export default App;