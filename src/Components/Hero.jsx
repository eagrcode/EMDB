// React imports
import { useState, useEffect } from "react";

// hooks
import { usefetchTrending } from "../hooks/getTrending";

// library imports
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

// HERO component
function Hero() {
  // state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBigScreen, setIsBigScreen] = useState(false);

  // fetch trending movies
  const { data: trending, isLoading, isError } = usefetchTrending();

  // backdrop path
  const path = "https://image.tmdb.org/t/p/w1280";
  const posterPath = "https://image.tmdb.org/t/p/w342";

  // Start slides
  useEffect(() => {
    const startSlides = setInterval(() => {
      if (currentSlide < trending?.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else setCurrentSlide(0);
    }, 10000);
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

  //Make btn icons bigger on big display
  useEffect(() => {
    function growIcons() {
      if (window.innerWidth >= 1020) {
        setIsBigScreen(!isBigScreen);
      } else {
        setIsBigScreen(false);
      }
    }
    window.addEventListener("resize", growIcons);
    return () => window.removeEventListener("resize", growIcons);
  }, []);

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
        key={trending[currentSlide].id}
        className="hero-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), hsl(240, 100%, 5%)), url("${path}${trending[currentSlide]?.backdrop_path}")`,
        }}
      >
        {/* <button className="hero-nav-btn">
            <IoChevronBack className="icon" size={50} onClick={toPrevSlide} />
          </button> */}

        <div className="hero-overlay-container">
          <div id="hero-card">
            <img src={`${posterPath}${trending[currentSlide]?.poster_path}`} />
          </div>
          <div className="hero-text-container">
            <div>
              <h1>{trending[currentSlide]?.title}</h1>
            </div>
            <div className="btn-container">
              <button className="hero-btn">
                Trailer <FaPlayCircle size={isBigScreen ? 25 : 18} />
              </button>
              <Link className="details-link" to={`/details/movie/${trending[currentSlide]?.id}`}>
                <button
                  className="hero-btn"
                  onClick={() => console.log(trending[currentSlide]?.id)}
                >
                  Info <FaInfoCircle size={isBigScreen ? 25 : 18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <button className="hero-nav-btn">
            <IoChevronForward
              className="icon"
              size={50}
              onClick={toNextSlide}
            />
          </button> */}
      </div>
    </header>
  );
}

export default Hero;
