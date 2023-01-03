import { useState, useEffect } from "react";

import MovieDot from "./MovieDot";

function Hero({ trending }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backDrop = trending[currentSlide]?.backdrop_path;
  const path = "https://image.tmdb.org/t/p/w1280";

  const title = trending[currentSlide]?.title;

  useEffect(() => {
    setInterval(() => {
      setCurrentSlide(currentSlide + 1);
    }, 5000);
  }, [currentSlide]);

  // const movieDot = trending.map((movie) => (
  //   <MovieDot key={movie.id} id={movie.id} currentSlide={currentSlide} />
  // ));

  return (
    <header id="hero-section">
      <div className="hero-container">
        <img id="backdrop" src={`${path}${backDrop}`} alt="movie-poster" />
        <div className="backdrop-text">
          <h3>{title}</h3>
        </div>
        {/* <div className="movie-dot-container">{movieDot}</div> */}
      </div>
    </header>
  );
}

export default Hero;
