// hooks
import { useFetchTopRated } from "../hooks/getTopRated";
import { useFetchUpcoming } from "../hooks/getUpcoming";
import { useFetchLatest } from "../hooks/getLatest";
import { useFetchPopularTV } from "../hooks/getPopularTV";
import { useFetchTopRatedTV } from "../hooks/getTopRatedTV";

// configs
import { imageURL, posterSizes } from "../configs/tmdbConfig";

// component imports
import { Row } from "../components";

function MovieRows() {
  // data fetch
  const { data: topRated, loadingTopRated, errorTopRated } = useFetchTopRated();
  const { data: upcoming, loadingUpcoming, errorUpcoming } = useFetchUpcoming();
  const { data: latest, loadingLatest, errorLatest } = useFetchLatest();
  const { data: popularTV, loadingPopularTV, errorPopularTV } = useFetchPopularTV();
  const { data: topRatedTV, loadingTopRatedTV, errorTopRatedTV } = useFetchTopRatedTV();

  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  if (
    loadingTopRated ||
    loadingUpcoming ||
    loadingLatest ||
    loadingTopRatedTV ||
    loadingPopularTV
  ) {
    return (
      <main id="movie-rows-section">
        <Row title={"Loading..."} />
        <Row title={"Loading..."} />
        <Row title={"Loading..."} />
        <Row title={"Loading..."} />
        <Row title={"Loading..."} />
      </main>
    );
  }

  if (errorTopRated || errorUpcoming || errorLatest || errorTopRatedTV || errorPopularTV) {
    return (
      <main id="movie-rows-section">
        <Row title={"Error"} />
        <Row title={"Error"} />
        <Row title={"Error"} />
        <Row title={"Error"} />
        <Row title={"Error"} />
      </main>
    );
  }

  return (
    <main id="movie-rows-section">
      <Row
        mediaType={"movie"}
        data={topRated}
        title={"Top Rated Movies"}
        imageURL={imageURL}
        imageSize={p185}
      />
      <Row
        mediaType={"movie"}
        data={upcoming}
        title={"Upcoming"}
        imageURL={imageURL}
        imageSize={p185}
      />
      <Row
        mediaType={"movie"}
        data={latest}
        title={"Latest"}
        imageURL={imageURL}
        imageSize={p185}
      />
      <Row
        mediaType={"tv"}
        data={popularTV}
        title={"Popular TV"}
        imageURL={imageURL}
        imageSize={p185}
      />
      <Row
        mediaType={"tv"}
        data={topRatedTV}
        title={"Top Rated TV"}
        imageURL={imageURL}
        imageSize={p185}
      />
    </main>
  );
}

export default MovieRows;
