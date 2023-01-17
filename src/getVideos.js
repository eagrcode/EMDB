import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

const fetchVideos = ({ queryKey }) => {
  const id = queryKey[1];
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    )
    .then((res) => res.data.results);
};

export const useVideos = (id) => {
  return useQuery(["videos", id], fetchVideos, {
    onSuccess: (videos) => {
      console.log(videos);
    },
  });
};
