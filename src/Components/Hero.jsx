import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";
import { useQuery } from "@tanstack/react-query";

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

  // Start slides
  useEffect(() => {
    const startSlides = setInterval(() => {
      if (currentSlide < trending?.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else setCurrentSlide(0);
    }, 5000);
    return () => clearInterval(startSlides);
  }, [trending, currentSlide]);

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
        className="hero-container hero-container:before"
        style={{
          backgroundImage: `url("${path}${trending[currentSlide]?.backdrop_path}")`,
        }}
      >
        <div className="backdrop-text">
          <h3>{trending[currentSlide]?.title}</h3>
          <p>{trending[currentSlide]?.overview}</p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
