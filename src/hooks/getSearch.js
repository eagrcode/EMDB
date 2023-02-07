import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

// Search Movies and TV shows by title
const fetchQuery = ({ queryKey }) => {
  const searchQuery = queryKey[1];
  return axios
    .get(`${baseURL}/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${searchQuery}`)
    .then((res) => res.data.results);
};

export const useQueryResults = (searchQuery) => {
  return useQuery(
    ["query", searchQuery],
    fetchQuery,
    { enabled: !!searchQuery },
    {
      onSuccess: (query) => {
        console.log(query);
      },
    }
  );
};
