function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}/5</p>
      <p>{movie.description}</p>
      <img
        src={movie.image}
        alt={movie.title}
        width="150"
      />
    </div>
  );
}

export default MovieCard;