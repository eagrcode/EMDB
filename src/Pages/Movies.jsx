// Library imports
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Request imports

// Component imports
import { MovieCard } from "../Components/index";

function Movies() {
  // FETCH MOVIES 1
  // const {
  //   data: movies1,
  //   isLoading: loadingMovies1,
  //   isError: errorMovies1,
  // } = useQuery(["movies1"], () => {
  //   return axios.get(requests.fetchMovies1).then((res) => res.data.results);
  // });

  // FETCH MOVIES 2
  const {
    data: movies2,
    isLoading: loadingMovies2,
    isError: errorMovies2,
  } = useQuery(["movies2"], () => {
    return axios.get(requests.fetchMovies2).then((res) => res.data.results);
  });

  // FETCH MOVIES 3
  const {
    data: movies3,
    isLoading: loadingMovies3,
    isError: errorMovies3,
  } = useQuery(["movies3"], () => {
    return axios.get(requests.fetchMovies3).then((res) => res.data.results);
  });

  const page1 = movies1?.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={movie.poster_path}
      backDrop={movie.backdrop_path}
    />
  ));

  const page2 = movies2?.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={movie.poster_path}
      backDrop={movie.backdrop_path}
    />
  ));

  const page3 = movies3?.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={movie.poster_path}
      backDrop={movie.backdrop_path}
    />
  ));

  if (loadingMovies1 || loadingMovies2 || loadingMovies3) {
    return <div>Loading...</div>;
  }

  if (loadingMovies1 || loadingMovies2 || loadingMovies3) {
    return <div>Error</div>;
  }

  return (
    <>
      <div id="movie-grid-container">
        <h1 id="movie-header">Movies</h1>
        <div className="movie-grid">
          {page1}
          {page2}
          {page3}
        </div>
      </div>
    </>
  );
}

export default Movies;
