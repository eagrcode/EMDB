import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

// Fetch movie details by ID
const fetchTrending = () => {
  return axios
    .get(`${baseURL}/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}`)
    .then((res) => res.data.results);
};

export const usefetchTrending = () => {
  return useQuery(["trending"], fetchTrending, {
    onSuccess: (trending) => {
      console.log(trending);
    },
  });
};
