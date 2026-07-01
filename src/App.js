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
    fetch(`${process.env.REACT_APP_API_URL}/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  function onAddMovie(newMovie) {
    setMovies(prev => [...prev, newMovie]);
  }

  function onDeleteMovie(id) {
  fetch(`${process.env.REACT_APP_API_URL}/movies/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Delete request failed');
      }
      return response.text();
    })
    .then(() => {
      setMovies(prev => prev.filter((movie) => movie.id !== id))
    })
    .catch(error => {
      console.error('Delete failed, logic skipped:', error);
    });
}

  return (
    <div className='App'>
      <h1>Plotboxd</h1>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<TopMovies movies={movies} onDeleteMovie={onDeleteMovie} />}
        />
        <Route
          path='/movies'
          element={<AllMovies movies={movies} onDeleteMovie={onDeleteMovie} />}
        />
        <Route
          path='/add-movie'
          element={<AddMovieForm onAddMovie={onAddMovie} movies={movies} />}
        />
      </Routes>
    </div>
  );
} 

  export default App;