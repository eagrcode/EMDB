import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch Movies page 1
const fetchMovies1 = () => {
  return axios
    .get(`${baseURL}/discover/movie?api_key=${API_KEY}&page=1&lang=us`)
    .then((res) => res.data.results);
};

export const usefetchMovies1 = () => {
  return useQuery(["movies1"], fetchMovies1, {
    onSuccess: (movies1) => {
      console.log(movies1);
    },
  });
};

// Fetch Movies page
const fetchMovies2 = () => {
  return axios
    .get(`${baseURL}/discover/movie?api_key=${API_KEY}&page=2&lang=us`)
    .then((res) => res.data.results);
};

export const useFetchMovies2 = () => {
  return useQuery(["movies2"], fetchMovies2, {
    onSuccess: (movies2) => {
      console.log(movies2);
    },
  });
};

// Fetch Movies page 3
const fetchMovies3 = () => {
  return axios
    .get(`${baseURL}/discover/movie?api_key=${API_KEY}&page=3&lang=us`)
    .then((res) => res.data.results);
};

export const usefetchMovies3 = () => {
  return useQuery(["movies3"], fetchMovies3, {
    onSuccess: (movies3) => {
      console.log(movies3);
    },
  });
};
