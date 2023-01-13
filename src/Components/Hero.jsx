import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";
import { useQuery } from "@tanstack/react-query";
import {
  FaAngleLeft,
  FaAngleRight,
  FaInfoCircle,
  FaPlayCircle,
} from "react-icons/fa";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSuccess = (trending) => {
    console.log("Success!", trending, trending.length);
  };

  // FETCH TRENDING
  const {
    data: trending,
    isLoading,
    isError,
  } = useQuery(
    ["trending"],
    () => {
      return axios.get(requests.fetchTrending).then((res) => res.data.results);
    },
    {
      onSuccess,
    }
  );

  // backdrop path
  const path = "https://image.tmdb.org/t/p/w1280";
  const posterPath = "https://image.tmdb.org/t/p/w342";

  // Start slides
  useEffect(() => {
    const startSlides = setInterval(() => {
      if (currentSlide < trending?.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else setCurrentSlide(0);
    }, 5000);
    return () => clearInterval(startSlides);
  }, [trending, currentSlide]);

  // To previous slide
  const toPrevSlide = () => {
    if (currentSlide - 1 < 0) {
      setCurrentSlide(trending?.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // To next slide
  const toNextSlide = () => {
    if (currentSlide < trending?.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setCurrentSlide(0);
    }
  };

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
            <button className="hero-btn">
              Play Trailer <FaPlayCircle />
            </button>
            <button className="hero-btn">
              More Info <FaInfoCircle />
            </button>
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
