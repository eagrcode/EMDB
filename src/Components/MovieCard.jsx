import { Link } from "react-router-dom";

function MovieCard({ id, mediaType, imageURL, imageSize, image }) {
  if (image) {
    return (
      <Link to={`/details/${mediaType}/${id}`}>
        <div className="movie-card">
          <img id="movie-card-img" src={`${imageURL}${imageSize}${image}`} alt="movie-poster" />
        </div>
      </Link>
    );
  }
}

export default MovieCard;
