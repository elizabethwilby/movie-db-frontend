import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import TopMovies from './components/TopMovies';
import AllMovies from './components/AllMovies';
import AddMovieForm from './components/AddMovieForm';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  function deleteMovie(id) {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE',
    });

    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <div className='App'>
      <h1>Movie Database</h1>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<TopMovies movies={movies} deleteMovie={deleteMovie} />}
        />
        <Route
          path='/movies'
          element={<AllMovies movies={movies} deleteMovie={deleteMovie} />}
        />
        <Route
          path='/add-movie'
          element={<AddMovieForm addMovie={addMovie} movies={movies}  />}
        />
      </Routes>
    </div>
  );
}

export default App;