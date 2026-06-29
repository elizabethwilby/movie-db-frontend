function MovieCard({ movie, deleteMovie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.genre}</p>
      <p>{movie.rating}/5</p>
      <p>{movie.description}</p>
      <img
        src={movie.image}
        alt={movie.title}
        width='150'
      />
      <button onClick={() => deleteMovie(movie.id)}>
        Delete
      </button>
    </div>
  );
}

export default MovieCard;