import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";
import { useQuery } from "@tanstack/react-query";
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // FETCH TRENDING
  const {
    data: trending,
    isLoading,
    isError,
  } = useQuery(["trending"], requests.fetchTrending, {
    onSuccess: (trending) => {
      console.log(trending);
    },
  });

  // backdrop path
  const path = "https://image.tmdb.org/t/p/w1280";
  const posterPath = "https://image.tmdb.org/t/p/w342";

  // Start slides
  useEffect(() => {
    const startSlides = setInterval(() => {
      if (currentSlide < trending?.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else setCurrentSlide(0);
    }, 6000);
    return () => clearInterval(startSlides);
  }, [trending, currentSlide]);

  // To previous slide
  // const toPrevSlide = () => {
  //   if (currentSlide - 1 < 0) {
  //     setCurrentSlide(trending?.length - 1);
  //   } else {
  //     setCurrentSlide((prev) => prev - 1);
  //   }
  // };

  // To next slide
  // const toNextSlide = () => {
  //   if (currentSlide < trending?.length - 1) {
  //     setCurrentSlide((prev) => prev + 1);
  //   } else {
  //     setCurrentSlide(0);
  //   }
  // };

  // Loading screen
  if (isLoading) {
    return (
      <header id="hero-section">
        <div className="hero-container">Loading...</div>
      </header>
    );
  }

  // Error screen
  if (isError) {
    return (
      <header id="hero-section">
        <div className="hero-container">Where's the fucking data?!</div>
      </header>
    );
  }

  // Success screen
  return (
    <header id="hero-section">
      <div
        className="hero-container"
        style={{
          backgroundImage: `url("${path}${trending[currentSlide]?.backdrop_path}")`,
        }}
      ></div>
      <div className="inner-hero-container">
        <div className="backdrop-text">
          <div>
            <h1>{trending[currentSlide]?.title}</h1>
          </div>
          <div>
            <p>{trending[currentSlide]?.overview}</p>
          </div>
          <div className="btn-container">
            {/* <button className="hero-btn">
              Play Trailer <FaPlayCircle />
            </button> */}
            <Link
              className="details-link"
              to={`/details/${trending[currentSlide]?.id}`}
            >
              <button
                className="hero-btn"
                onClick={() => console.log(trending[currentSlide]?.id)}
              >
                More Info <FaInfoCircle size={30} />
              </button>
            </Link>
          </div>
        </div>
        <img
          id="hero-card"
          src={`${posterPath}${trending[currentSlide]?.poster_path}`}
        />
      </div>
    </header>
  );
}

export default Hero;
