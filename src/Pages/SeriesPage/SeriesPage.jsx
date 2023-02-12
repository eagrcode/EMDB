// hooks
import { usefetchSeries1, useFetchSeries2, usefetchSeries3 } from "../../hooks/getSeries";

// css
import "../MoviesPage/movies-page.css";

// configs
import { imageURL, posterSizes } from "../../configs/tmdbConfig";

// Component imports
import { MovieCard } from "../../components";

// libraries
import MoonLoader from "react-spinners/MoonLoader";

function SeriesPage() {
  // fetch movie pages 1-3
  const { data: series1, isLoading: loadingSeries1, isError: errorSeries1 } = usefetchSeries1();
  const { data: series2, isLoading: loadingSeries2, isError: errorSeries2 } = useFetchSeries2();
  const { data: series3, isLoading: loadingSeries3, isError: errorSeries3 } = usefetchSeries3();

  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  const page1 = series1?.map((item) => (
    <MovieCard
      mediaType="tv"
      key={item.id}
      id={item.id}
      title={item.title || item.name}
      imageURL={imageURL}
      imageSize={p154}
      image={item.poster_path}
    />
  ));

  const page2 = series2?.map((item) => (
    <MovieCard
      mediaType="tv"
      key={item.id}
      id={item.id}
      title={item.title || item.name}
      imageURL={imageURL}
      imageSize={p154}
      image={item.poster_path}
    />
  ));

  const page3 = series3?.map((item) => (
    <MovieCard
      mediaType="tv"
      key={item.id}
      id={item.id}
      title={item.title || item.name}
      imageURL={imageURL}
      imageSize={p154}
      image={item.poster_path}
    />
  ));

  if (loadingSeries1 || loadingSeries2 || loadingSeries3) {
    return (
      <section className="movies-section">
        <MoonLoader
          color="hsl(195, 40%, 90%)"
          loading={loadingSeries1 || loadingSeries2 || loadingSeries3}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </section>
    );
  }

  if (errorSeries1 || errorSeries2 || errorSeries3) {
    return (
      <section className="movies-section">
        <p>Sorry, the data could not be found!</p>
      </section>
    );
  }

  return (
    <section className="movies-section">
      <h1>Series</h1>
      <div className="movies-grid">
        {page1}
        {page2}
        {page3}
      </div>
    </section>
  );
}

export default SeriesPage;
