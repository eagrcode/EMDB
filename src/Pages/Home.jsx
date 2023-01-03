import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";

import { Hero, MovieRows } from "../Components";

function Home() {
  const [trending, settrending] = useState([]);
  const [topRated, setTopRated] = useState([]);

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
          settrending(response.data.results);
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

  return (
    <>
      <Hero trending={trending} />
      <MovieRows topRated={topRated} />
    </>
  );
}

export default Home;
