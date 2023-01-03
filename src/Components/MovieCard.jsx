function MovieCard({ id, title, image, backDrop }) {
  const path = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">
      <img id="movie-card-img" src={`${path}${image}`} alt="movie-poster" />
    </div>
  );
}

export default MovieCard;
