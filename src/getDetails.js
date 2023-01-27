import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch movie details by ID
const fetchDetails = ({ queryKey }) => {
  const mediaType = queryKey[1];
  const id = queryKey[2];
  return axios
    .get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}&append_to_response=credits,videos,reviews,similar&language=en-US`
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

// Fetch movie reviews by ID
// const fetchReviews = ({ queryKey }) => {
//   const id = queryKey[1];
//   return axios
//     .get(
//       `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
//     )
//     .then((res) => res.data.results);
// };

// export const useReviews = (id) => {
//   return useQuery(["reviews", id], fetchReviews, {
//     onSuccess: (reviews) => {
//       console.log(reviews);
//     },
//   });
// };

// // Fetch credits/cast by movie ID
// const fetchCredits = ({ queryKey }) => {
//   const id = queryKey[1];
//   return axios
//     .get(
//       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
//     )
//     .then((res) => res.data.cast);
// };

// export const useCredits = (id) => {
//   return useQuery(["credits", id], fetchCredits, {
//     onSuccess: (credits) => {
//       console.log(credits);
//     },
//   });
// };
