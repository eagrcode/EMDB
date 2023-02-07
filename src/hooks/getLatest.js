import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

// Fetch latest movies
const fetchLatest = () => {
  return axios
    .get(
      `${baseURL}/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&primary_release_year=2022&page=1&lang=us`
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
