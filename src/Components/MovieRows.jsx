// hooks
import { useFetchTopRated } from "../hooks/getTopRated";
import { useFetchUpcoming } from "../hooks/getUpcoming";
import { useFetchLatest } from "../hooks/getLatest";
import { useFetchPopularTV } from "../hooks/getPopularTV";
import { useFetchTopRatedTV } from "../hooks/getTopRatedTV";

// Component imports
import { Row } from "./index";

function MovieRows() {
  const { data: topRated, loadingTopRated, errorTopRated } = useFetchTopRated();
  const { data: upcoming, loadingUpcoming, errorUpcoming } = useFetchUpcoming();
  const { data: latest, loadingLatest, errorLatest } = useFetchLatest();
  const {
    data: popularTV,
    loadingPopularTV,
    errorPopularTV,
  } = useFetchPopularTV();
  const {
    data: topRatedTV,
    loadingTopRatedTV,
    errorTopRatedTV,
  } = useFetchTopRatedTV();

  //
  const path = "https://image.tmdb.org/t/p/w185";

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

  if (
    errorTopRated ||
    errorUpcoming ||
    errorLatest ||
    errorTopRatedTV ||
    errorPopularTV
  ) {
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
      <Row mediaType={"movie"} data={topRated} title={"Classics"} path={path} />
      <Row mediaType={"movie"} data={upcoming} title={"Upcoming"} path={path} />
      <Row mediaType={"movie"} data={latest} title={"Latest"} path={path} />
      <Row mediaType={"tv"} data={popularTV} title={"Popular TV"} path={path} />
      <Row
        mediaType={"tv"}
        data={topRatedTV}
        title={"Top Rated TV"}
        path={path}
      />
    </main>
  );
}

export default MovieRows;
