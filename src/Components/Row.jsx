import ScrollContainer from "react-indiana-drag-scroll";

import { MovieCard } from "./index";

function Row({ data, title, path, mediaType }) {
  const movieRow = data?.map((movie) => (
    <MovieCard
      mediaType={mediaType}
      key={movie.id}
      id={movie.id}
      title={movie.title}
      path={path}
      image={movie.poster_path}
    />
  ));

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <ScrollContainer vertical={false} className="movie-row-inner">
        {movieRow}
      </ScrollContainer>
    </div>
  );
}

export default Row;
