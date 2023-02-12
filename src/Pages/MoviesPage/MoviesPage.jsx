// hooks
import { usefetchMovies1, useFetchMovies2, usefetchMovies3 } from "../../hooks/getMovies";

// css
import "../MoviesPage/movies-page.css";

// configs
import { imageURL, posterSizes } from "../../configs/tmdbConfig";

// Component imports
import { MovieCard } from "../../Components";

// libraries
import MoonLoader from "react-spinners/MoonLoader";

function MoviesPage() {
  // fetch movie pages 1-3
  const { data: movies1, isLoading: loadingMovies1, isError: errorMovies1 } = usefetchMovies1();
  const { data: movies2, isLoading: loadingMovies2, isError: errorMovies2 } = useFetchMovies2();
  const { data: movies3, isLoading: loadingMovies3, isError: errorMovies3 } = usefetchMovies3();

  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  const page1 = movies1?.map((item) => (
    <MovieCard
      mediaType="movie"
      key={item.id}
      id={item.id}
      title={item.title || item.name}
      imageURL={imageURL}
      imageSize={p154}
      image={item.poster_path}
    />
  ));

  const page2 = movies2?.map((item) => (
    <MovieCard
      mediaType="movie"
      key={item.id}
      id={item.id}
      title={item.title || item.name}
      imageURL={imageURL}
      imageSize={p154}
      image={item.poster_path}
    />
  ));

  const page3 = movies3?.map((item) => (
    <MovieCard
      mediaType="movie"
      key={item.id}
      id={item.id}
      title={item.title || item.name}
      imageURL={imageURL}
      imageSize={p154}
      image={item.poster_path}
    />
  ));

  if (loadingMovies1 || loadingMovies2 || loadingMovies3) {
    return (
      <section className="movies-section">
        <MoonLoader
          color="hsl(195, 40%, 90%)"
          loading={loadingMovies1 || loadingMovies2 || loadingMovies3}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </section>
    );
  }

  if (errorMovies1 || errorMovies2 || errorMovies3) {
    return (
      <section className="movies-section">
        <p>Sorry, the data could not be found!</p>
      </section>
    );
  }

  return (
    <section className="movies-section">
      <h1>Movies</h1>
      <div className="movies-grid">
        {page1}
        {page2}
        {page3}
      </div>
    </section>
  );
}

export default MoviesPage;
