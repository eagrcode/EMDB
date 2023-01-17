import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

const requests = {
  fetchTrending: () =>
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
      )
      .then((res) => res.data.results),

  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1&lang=us`,
  fetchLatest: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=2022&page=1&lang=us`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1&lang=us`,
  fetchPopularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=1&lang=us`,
  fetchTopRatedTV: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&page=1&lang=us`,
  fetchMovies1: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1&lang=us`,
  fetchMovies2: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=2&lang=us`,
  fetchMovies3: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=3&lang=us`,
};
export default requests;
