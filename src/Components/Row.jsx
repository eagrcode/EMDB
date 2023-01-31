import ScrollContainer from "react-indiana-drag-scroll";

import { MovieCard } from "./index";

function Row({ data, title, imageURL, imageSize, mediaType }) {
  const movieRow = data?.map((movie) => (
    <MovieCard
      mediaType={mediaType}
      key={movie.id}
      id={movie.id}
      title={movie.title}
      imageURL={imageURL}
      imageSize={imageSize}
      image={movie?.poster_path}
    />
  ));

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row-inner">{movieRow}</div>
    </div>
  );
}

export default Row;
