import { Row } from "./index";
import axios from "axios";
import requests from "../requests";
import { useQuery, useQueries } from "@tanstack/react-query";

function MovieRows() {
  // FETCH TOP RATED
  const {
    data: topRated,
    isLoading: loadingTopRated,
    isError: errorTopRated,
  } = useQuery(["topRated"], () => {
    return axios.get(requests.fetchTopRated).then((res) => res.data.results);
  });

  // FETCH UPCOMING
  const {
    data: upcoming,
    isLoading: loadingUpcoming,
    isError: errorUpcoming,
  } = useQuery(["upcoming"], () => {
    return axios.get(requests.fetchUpcoming).then((res) => res.data.results);
  });

  // FETCH LATEST
  const {
    data: latest,
    isLoading: loadingLatest,
    isError: errorLatest,
  } = useQuery(["latest"], () => {
    return axios.get(requests.fetchLatest).then((res) => res.data.results);
  });

  if (loadingTopRated || loadingUpcoming || loadingLatest) {
    return (
      <>
        <Row title={"Classics"} />
        <Row title={"Upcoming"} />
        <Row title={"Latest"} />
      </>
    );
  }

  if (errorTopRated || errorUpcoming || errorLatest) {
    return (
      <>
        <Row title={"Classics"} />
        <Row title={"Upcoming"} />
        <Row title={"Latest"} />
      </>
    );
  }

  return (
    <>
      <Row data={topRated} title={"Classics"} />
      <Row data={upcoming} title={"Upcoming"} />
      <Row data={latest} title={"Latest"} />
    </>
  );
}

export default MovieRows;
