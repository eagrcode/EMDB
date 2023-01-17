import { Link } from "react-router-dom";

function MovieCard({ id, title, path, image }) {
  if (image) {
    return (
      <Link to={`/details/${id}`}>
        <div className="movie-card">
          <img id="movie-card-img" src={`${path}${image}`} alt="movie-poster" />
        </div>
      </Link>
    );
  }
}

export default MovieCard;
