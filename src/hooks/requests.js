const API_KEY = "20be784f740b6b638c906dde5b35efae";

const requests = {
  fetchMovies1: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1&lang=us`,
  fetchMovies2: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=2&lang=us`,
  fetchMovies3: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=3&lang=us`,
};

export default requests;
