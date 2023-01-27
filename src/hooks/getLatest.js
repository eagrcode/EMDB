import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch latest movies
const fetchLatest = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=2022&page=1&lang=us`
    )
    .then((res) => res.data.results);
};

export const useFetchLatest = () => {
  return useQuery(["latest"], fetchLatest, {
    onSuccess: (latest) => {
      console.log(latest);
    },
  });
};
