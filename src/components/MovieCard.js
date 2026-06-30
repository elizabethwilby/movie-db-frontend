function MovieCard({ movie, deleteMovie }) {
  return (
    <div className='movie-card'>
      <h2>{movie.title}</h2>

      <div className='poster-flip'>
        <div className='poster-inner'>
          <div className='poster-front'>
            <img src={movie.image} alt={`${movie.title} poster`} />
          </div>

          <div className='poster-back'>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>

      <p>Rating: {movie.rating}/5</p>
      <p>Genre: {movie.genre}</p>

      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </div>
  );
}

export default MovieCard;