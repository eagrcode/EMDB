import ScrollContainer from "react-indiana-drag-scroll";

import { MovieCard } from "./index";

function Row({ data, title }) {
  const movieRow = data?.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={movie.poster_path}
      backDrop={movie.backdrop_path}
    />
  ));

  return (
    <div className="movie-row">
      <h3>{title}</h3>
      <ScrollContainer vertical={false} className="movie-row-inner">
        {movieRow}
      </ScrollContainer>
    </div>
  );
}

export default Row;
