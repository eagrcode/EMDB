import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

// Fetch top ratd movies
const fetchTopRated = () => {
  return axios
    .get(`${baseURL}/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=1&lang=us`)
    .then((res) => res.data.results);
};

export const useFetchTopRated = () => {
  return useQuery(["topRated"], fetchTopRated, {
    onSuccess: (topRated) => {
      console.log(topRated);
    },
  });
};
