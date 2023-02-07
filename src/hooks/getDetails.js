import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

// Fetch movie details by ID
const fetchDetails = ({ queryKey }) => {
  const mediaType = queryKey[1];
  const id = queryKey[2];
  return axios
    .get(
      `${baseURL}/${mediaType}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&append_to_response=credits,videos,reviews,similar&language=en-US`
    )
    .then((res) => res.data);
};

export const useItemDetails = (mediaType, id) => {
  return useQuery(["info", mediaType, id], fetchDetails, {
    onSuccess: (info) => {
      console.log(info);
    },
  });
};
