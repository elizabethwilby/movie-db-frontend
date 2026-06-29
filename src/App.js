import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  console.log(movies);

  return (
  <div className="App">
    <h1>Movie Database</h1>

    {movies.map((movie) => (
  <MovieCard
    key={movie.id}
    movie={movie}
  />
))}
  </div>
);
}

export default App;