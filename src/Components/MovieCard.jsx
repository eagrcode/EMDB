function MovieCard({ id, title, path, image }) {
  if (image) {
    return (
      <div className="movie-card">
        <img id="movie-card-img" src={`${path}${image}`} alt="movie-poster" />
      </div>
    );
  }
}

export default MovieCard;
