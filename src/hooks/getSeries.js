import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

// Fetch Series page 1
const fetchSeries1 = () => {
  return axios
    .get(`${baseURL}/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&page=1&lang=us`)
    .then((res) => res.data.results);
};

export const usefetchSeries1 = () => {
  return useQuery(["series1"], fetchSeries1, {
    onSuccess: (series1) => {
      console.log(series1);
    },
  });
};

// Fetch Series page
const fetchSeries2 = () => {
  return axios
    .get(`${baseURL}/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&page=2&lang=us`)
    .then((res) => res.data.results);
};

export const useFetchSeries2 = () => {
  return useQuery(["series2"], fetchSeries2, {
    onSuccess: (series2) => {
      console.log(series2);
    },
  });
};

// Fetch Series page 3
const fetchSeries3 = () => {
  return axios
    .get(`${baseURL}/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&page=3&lang=us`)
    .then((res) => res.data.results);
};

export const usefetchSeries3 = () => {
  return useQuery(["series3"], fetchSeries3, {
    onSuccess: (series3) => {
      console.log(series3);
    },
  });
};
