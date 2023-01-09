// Library imports
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Request imports
import requests from "../requests";

// Component imports
import { Row } from "./index";

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

  // FETCH POPULAR TV
  const {
    data: popularTV,
    isLoading: loadingPopularTV,
    isError: errorPopularTV,
  } = useQuery(["popularTV"], () => {
    return axios.get(requests.fetchPopularTV).then((res) => res.data.results);
  });

  // FETCH TOP RATED TV
  const {
    data: topRatedTV,
    isLoading: loadingTopRatedTV,
    isError: errorTopRatedTV,
  } = useQuery(["topRatedTV"], () => {
    return axios.get(requests.fetchTopRatedTV).then((res) => res.data.results);
  });

  if (loadingTopRated || loadingUpcoming || loadingLatest) {
    return (
      <>
        <Row title={"Loading..."} />
        <Row title={"Loading..."} />
        <Row title={"Loading..."} />
        <Row title={"Loading..."} />
        <Row title={"Loading..."} />
      </>
    );
  }

  if (errorTopRated || errorUpcoming || errorLatest) {
    return (
      <>
        <Row title={"Error"} />
        <Row title={"Error"} />
        <Row title={"Error"} />
        <Row title={"Error"} />
        <Row title={"Error"} />
      </>
    );
  }

  return (
    <>
      <Row data={topRated} title={"Classics"} />
      <Row data={upcoming} title={"Upcoming"} />
      <Row data={latest} title={"Latest"} />
      <Row data={popularTV} title={"Popular TV"} />
      <Row data={topRatedTV} title={"Top Rated TV"} />
    </>
  );
}

export default MovieRows;
