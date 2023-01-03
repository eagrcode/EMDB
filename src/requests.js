const API_KEY = "20be784f740b6b638c906dde5b35efae";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`,
  fetchLatest: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=2022&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`,
};
export default requests;
