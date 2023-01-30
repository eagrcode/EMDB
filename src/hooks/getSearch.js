import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Search Movies and TV shows by title
const fetchQuery = ({ queryKey }) => {
  const searchQuery = queryKey[1];
  return axios
    .get(`${baseURL}/search/multi?api_key=${API_KEY}&query=${searchQuery}`)
    .then((res) => res.data.results);
};

export const useQueryResults = (searchQuery) => {
  return useQuery(["query", searchQuery], fetchQuery, {
    onSuccess: (query) => {
      console.log(query);
    },
  });
};
