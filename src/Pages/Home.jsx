import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";

import { Hero, MovieRows } from "../Components";

function Home() {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [latest, setLatest] = useState([]);

  // FETCH TRENDING //
  useEffect(() => {
    const trendingData = async () => {
      const options = {
        method: "GET",
        url: requests.fetchTrending,
      };

      await axios
        .request(options)
        .then(function (response) {
          setTrending(response.data.results);
          console.log(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    trendingData();
  }, []);

  // FETCH TOP RATED //
  useEffect(() => {
    const topRatedData = async () => {
      const options = {
        method: "GET",
        url: requests.fetchTopRated,
      };

      await axios
        .request(options)
        .then(function (response) {
          setTopRated(response.data.results);
          console.log(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    topRatedData();
  }, []);

  // FETCH UPCOMING //
  useEffect(() => {
    const upcomingData = async () => {
      const options = {
        method: "GET",
        url: requests.fetchUpcoming,
      };

      await axios
        .request(options)
        .then(function (response) {
          setUpcoming(response.data.results);
          console.log(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    upcomingData();
  }, []);

  // FETCH LATEST //
  useEffect(() => {
    const latestData = async () => {
      const options = {
        method: "GET",
        url: requests.fetchLatest,
      };

      await axios
        .request(options)
        .then(function (response) {
          setLatest(response.data.results);
          console.log(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    latestData();
  }, []);

  console.log(latest);

  return (
    <>
      <Hero trending={trending} />
      <MovieRows topRated={topRated} upcoming={upcoming} latest={latest} />
    </>
  );
}

export default Home;
